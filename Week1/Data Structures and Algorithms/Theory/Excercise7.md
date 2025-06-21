## Financial Forecasting

### 1. Understand Recursive Algorithms

#### 1.1 Explain the Concept of Recursion and How It Can Simplify Certain Problems

**Recursion** is a programming technique where a method calls itself to solve smaller instances of the same problem.

#### Key Components of Recursion:

- **Base Case**  
  A simple instance of the problem that can be solved directly.  
  This stops the recursion from continuing indefinitely.

- **Recursive Case**  
  Where the method calls itself using a smaller or simpler input.

#### Why Use Recursion?

Recursion simplifies complex problems by **breaking them into smaller, more manageable subproblems**. It enables solutions that are often more **elegant and intuitive** than iterative approaches, especially in tasks like traversing trees, solving puzzles (e.g., Towers of Hanoi), or implementing algorithms like quicksort or mergesort.

---

### 2. Analysis

#### 2.1 Discuss the time complexity of your recursive algorithm

The recursive method `futureValueRecursive` calculates the future value over `n` periods by calling itself `n` times. Each recursive call performs a single multiplication, which is in constant time.

- **Time Complexity**: **O(n)**
  - Because the function makes `n` recursive calls in sequence, the time complexity is linear in relation to the number of periods.

#### 2.2 Explain how to optimize the recursive solution to avoid excessive computation.

### Optimizing Recursive Solutions to Avoid Excessive Computation

Recursive solutions can be elegant but often come with the cost of performance or risk of stack overflow. Below are key strategies to make recursive algorithms more efficient and robust:

---

#### 1. Iterative Solution

Convert **simple linear recursions** into `for` or `while` loops to eliminate the overhead of recursive function calls.

#### 2. Direct Mathematical Formulas

Use built-in mathematical formulas whenever possible (e.g., `Math.pow`) to compute results in **constant time (O(1))**.

####  3. Memoization (Top-Down Dynamic Programming)

Cache the results of previously solved subproblems to avoid recomputation.

- Reduces **exponential time (O(2ⁿ))** to **linear or polynomial time (O(n) or O(n²))**
- Best suited for problems with **overlapping subproblems**, like Fibonacci, grid traversal, etc.

####  4. Dynamic Programming (Bottom-Up Approach)

Solve problems iteratively from the **base case upwards**, storing intermediate results in a table or array.