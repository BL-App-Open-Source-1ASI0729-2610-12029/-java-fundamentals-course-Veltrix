import java.util.Scanner;

public class Decisiones {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingresa tu nota (0-20): ");
        int nota = scanner.nextInt();

        if (nota >= 11) {
            System.out.println("¡Aprobaste! Tu nota es " + nota);
        } else {
            System.out.println("Desaprobaste. Tu nota es " + nota);
        }

        scanner.close();
    }
}
