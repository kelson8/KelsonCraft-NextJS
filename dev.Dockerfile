FROM node:24.12.0

WORKDIR /usr/src/app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

COPY . .

EXPOSE 3000

# Use a non-root user
RUN groupadd -r app && useradd -r -g app app && chown -R app:app /usr/src/app

# Setup the corepack folder for proper permissions
RUN mkdir -p /home/app/.cache/node/corepack && chown -R app:app /home/app/.cache

# Setup the .next folder permissions.
RUN mkdir -p /usr/src/app/.next && chown -R app:app /usr/src/app/.next
USER app

CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]