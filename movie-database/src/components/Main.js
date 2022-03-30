/**
 * import component Hello agar bisa diakses
 */
import Hello from "./Hello";

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
    return (
      <main>
        {/**
         * Mengirim props ke component Hello.
         * nama props: name
         */}
        <Hello name="Muhammad Al Fikri" />
      </main>
    );
}
export default Main;