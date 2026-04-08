package school.sptech;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {

    String mensagem;
    String tipo;
    LocalDateTime dataHora;

    public void preencherLog(String mensagemRecebida, String tipoRecebido) {
        mensagem = mensagemRecebida;
        tipo = tipoRecebido;
        dataHora = LocalDateTime.now();
    }

    // Transforma o Log em String e retorna para a exibição
    public String formatarLog() {
        DateTimeFormatter formato =
                DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        return "[" + dataHora.format(formato) + "] " + "[" + tipo + "] " + mensagem;
    }
}
