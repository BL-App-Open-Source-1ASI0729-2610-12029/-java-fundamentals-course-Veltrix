public class Estudiante {
    String nombre;
    int edad;
    double nota;

    public Estudiante(String nombre, int edad, double nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    public void presentarse() {
        System.out.println("Soy " + nombre + ", tengo " + edad + " años y mi nota es " + nota);
    }

    public static void main(String[] args) {
        Estudiante ana = new Estudiante("Ana", 15, 18.5);
        Estudiante luis = new Estudiante("Luis", 16, 14.0);

        ana.presentarse();
        luis.presentarse();
    }
}
