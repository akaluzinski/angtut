package eu.kaluzinski.jdk14;

import static java.lang.String.format;

record Range(int lo, int hi) {
    public Range {
        if (lo > hi)
            throw new IllegalArgumentException(format("(%d, %d)", lo, hi));
    }
}
