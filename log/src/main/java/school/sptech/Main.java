package school.sptech;

public class Main {

    public static void main(String[] args) {

        SistemaLog sistema = new SistemaLog();

        // Simulando os registros do Log
        sistema.registrarLog("Usuário realizou login com sucesso", "INFO");
        sistema.registrarLog("Novo usuário cadastrado", "INFO");
        sistema.registrarLog("Erro ao realizar login: senha e/ou login incorretos", "ERROR");

        System.out.println("===== LOGS DO SISTEMA =====");
        sistema.exibirLogs();
    }
}