package school.sptech;

import java.util.ArrayList;

public class SistemaLog {

    ArrayList<Log> historicoLogs = new ArrayList<>();

    public void registrarLog(String mensagem, String tipo) {

        Log novoLog = new Log(); // Estou criando o objeto Log vazio
        novoLog.preencherLog(mensagem, tipo); // Preenchendo os dados do Log

        historicoLogs.add(novoLog); // Adicionando o log no histórico
    }

    public void exibirLogs() {

        for (int i = 0; i < historicoLogs.size(); i++) {
            System.out.println(historicoLogs.get(i).formatarLog());
        }
    }
}
