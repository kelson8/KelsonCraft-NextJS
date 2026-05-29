export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <br></br>
            <footer className="text-center">&#xA9; Copyright {currentYear} kelson8 AGPLv3</footer>
            <br></br>
        </>
    )
}