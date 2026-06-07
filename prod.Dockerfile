# Builder
FROM node:24.12.0 AS builder

# TODO Make this use the non-root app user.

WORKDIR /usr/src/app

# Enable corepack to provide pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./

# Fix for the building of this
# https://github.com/orgs/pnpm/discussions/9109
RUN pnpm install --dangerously-allow-all-builds --config.confirmModulesPurge=false --frozen-lockfile

COPY . .

# Generate the prisma DB.
# TODO Copy this output into the runner.
RUN pnpm run generate:prisma-db

RUN pnpm build

# Runner
FROM node:24.12.0 AS runner

WORKDIR /usr/src/app

# Enable corepack/pnpm in runtime as well
RUN corepack enable && corepack prepare pnpm@latest --activate

#-----
# Non root user
# TODO Set this up
#-----

# Create non-root user
#RUN groupadd -r app && useradd -r -g app app && mkdir -p /usr/src/app && chown -R app:app /usr/src/app
#
## Setup the corepack and .next folder for proper permissions
#RUN mkdir -p /home/app/.cache/node/corepack \
#    && chown -R app:app /home/app/.cache \
#    && mkdir -p /usr/src/app/.next \
#    && chown -R app:app /usr/src/app/.next

# Setup the .next folder permissions.
# RUN mkdir -p /usr/src/app/.next && chown -R app:app /usr/src/app/.next

# Copy only the necessary files from builder
# next start needs .next, package.json, pnpm-lock (optional), and node_modules for production
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/next.config.ts ./next.config.ts
COPY --from=builder /usr/src/app/pnpm-lock.yaml* ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

RUN #chown -R app:app /usr/src/app

#USER app

ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "start", "-H", "0.0.0.0"]