package in.cognizant;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAAPatternTestCalculator {
    private Calculator calc;

    @Before
    public void setup() {
        // arrange
        this.calc = new Calculator();
        System.out.println("Calculator initialized.");
    }

    @After
    public void tearDown() {
        this.calc = null;
        System.out.println("Calculator Destroyed.");
    }

    @Test
    public void testAddition() {
        // act
        int result = this.calc.add(10, 5);

        // assert
        assertEquals("10 + 5 should be 15", 15, result);
    }

    @Test
    public void testMultiplication() {
        // act
        int result = this.calc.multiply(3, 4);

        // assert
        assertEquals("3 * 4 should be 12", 12, result);
    }
}
