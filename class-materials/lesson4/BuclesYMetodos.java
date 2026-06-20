public class BuclesYMetodos {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            saludar("Estudiante " + i);
        }
    }

    public static void saludar(String nombre) {
        System.out.println("Hola, " + nombre + "!");
    }
}
