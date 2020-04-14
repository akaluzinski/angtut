package eu.kaluzinski.jdk14;

enum Event {
    CASE_A, CASE_B, CASE_C, CASE_D
}

public class Jdk14Tests {

    public static void main(String... args) {
        String multiLineTextBlock = """
                <html>
                    <body>
                        <p>Hello, world</p>
                    </body>
                </html>
                """;

        assert JEP_305("3test2");
        assert JEP_359(Event.CASE_D).equals("Not covered case CASE_D");
        new Range(5, 3);
    }


    public static boolean JEP_305(Object obj) {
        return (obj instanceof String s) ? s.contains("test") : false;
    }

    public static String JEP_359(final Event someCase) {
        return switch (someCase) {
            case CASE_B, CASE_C -> someCase.toString();
            default -> {
                yield String.format("Not covered case %s", someCase.toString());
            }
        };
    }
}
