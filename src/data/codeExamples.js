export const codeExamples = [
  {
    title: 'Hello World',
    code: `func main() {
    println("Hello, world!")
}`,
  },
  {
    title: 'Variables',
    code: `func main() {
    // Mutable binding
    var count = 0

    // Immutable binding
    fin name = "Azora"
    fin greeting = "Hello, \${name}!"

    // Type inference works on arrays too
    fin items = [1, 2, 3, 4, 5]
    count = items.length

    println(greeting)
    println(count)
}`,
  },
  {
    title: 'Functions & Lambdas',
    code: `// Named function with return type
func add(a: Int, b: Int): Int {
    return a + b
}

// Single-expression function
func square(x: Int): Int = x * x

// Higher-order function
func apply(value: Int, transform: (Int) -> Int): Int {
    return transform(value)
}

func main() {
    println(add(3, 4))
    println(square(5))

    // Lambda
    fin double = { x -> x * 2 }
    println(apply(5, double))
}`,
  },
  {
    title: 'Packs & Enums',
    code: `pack Point {
    var x: Real
    var y: Real
}

enum Direction {
    North, South, East, West
}

func main() {
    fin p = Point(3.0, 4.0)
    fin origin = Point(0.0, 0.0)

    fin dx = p.x - origin.x
    fin dy = p.y - origin.y
    println("Distance squared: \${dx * dx + dy * dy}")

    fin dir = Direction.North
    println(dir)
}`,
  },
  {
    title: 'Slots',
    code: `slot Shape {
    Circle(radius: Real)
    Rectangle(width: Real, height: Real)
    Point
}

func describe(shape: Shape): String {
    return when shape {
        is .Circle -> "circle"
        is .Rectangle -> "rectangle"
        is .Point -> "point"
    }
}

func main() {
    fin c = Shape.Circle(5.0)
    fin r = Shape.Rectangle(3.0, 4.0)
    fin p = Shape.Point

    println(describe(c))
    println(describe(r))
    println(describe(p))
    println(c.radius)
}`,
  },
  {
    title: 'Generics',
    code: `pack Pair<A, B> {
    var first: A
    var second: B
}

func swap<A, B>(pair: Pair<A, B>): Pair<B, A> {
    return Pair(pair.second, pair.first)
}

func main() {
    fin p = Pair<String, Int>("hello", 42)
    println("\${p.first}, \${p.second}")

    fin s = swap<String, Int>(p)
    println("\${s.first}, \${s.second}")
}`,
  },
  {
    title: 'Async / Await',
    code: `func main() {
    fin a = async {
        suspend 100
        "Hello, Alice!"
    }
    fin b = async {
        suspend 100
        "Hello, Bob!"
    }

    // Await both results
    println(await a())
    println(await b())
}`,
  },
  {
    title: 'Flows',
    code: `flow range(n: Int): Int {
    for i in 0..n {
        yield i
    }
}

flow evens(n: Int): Int {
    for i in 0..n {
        if i % 2 == 0 {
            yield i
        }
    }
}

task main() {
    var sum = 0
    async for x in range(5) {
        sum = sum + x
    }
    println("Sum 0..5: \${sum}")

    async for e in evens(10) {
        println(e)
    }
}`,
  },
  {
    title: 'Testing',
    code: `func factorial(n: Int): Int {
    if n <= 1 { return 1 }
    return n * factorial(n - 1)
}

test "factorial of 0 is 1" {
    assert factorial(0) == 1
}

test "factorial of 5 is 120" {
    assert factorial(5) == 120
}

test "factorial of 1 is 1" {
    assert factorial(1) == 1
}`,
  },
  {
    title: 'Error Handling',
    code: `fail MathError {
    DivisionByZero
    Overflow
}

func safeDivide(a: Int, b: Int): Int!MathError {
    if b == 0 { return fail .DivisionByZero }
    return a / b
}

func main() {
    // Catch with default value
    fin result = safeDivide(10, 0) catch -1
    println("10 / 0 = \${result}")

    // Catch with lambda
    fin msg = safeDivide(8, 0) catch { err ->
        when err {
            .DivisionByZero -> "Cannot divide by zero"
            .Overflow -> "Overflow occurred"
        }
    }
    println(msg)

    // Successful division
    fin ok = safeDivide(10, 2) catch 0
    println("10 / 2 = \${ok}")
}`,
  },
  {
    title: 'Collection Literals',
    code: `func main() {
    // Array
    fin numbers = [1, 2, 3, 4, 5]
    println("Array length: \${numbers.length}")

    // Set literal — deduplicates
    fin unique = ![1, 2, 2, 3, 3, 3]
    println("Set length: \${unique.length}")

    // Map literal
    fin scores = ["alice": 95, "bob": 87, "carol": 92]
    println("Map length: \${scores.length}")

    // Empty map
    fin empty = [:]
    println("Empty map: \${empty.length}")
}`,
  },
  {
    title: 'Metaprogramming',
    code: `deco Range {
    min: Int
    max: Int
}

deco Serializable

@Serializable
@Range(min = 0, max = 100)
fin health: Int = 50

// Compile-time introspection
inline if hasDeco(health, Serializable) {
    inline trace { "health is serializable" }
}

inline if hasDeco(health, Range) {
    fin $minVal = getDeco(health, Range::min)
    fin $maxVal = getDeco(health, Range::max)
    inline trace { "health range: " + $minVal + ".." + $maxVal }
}

func main() {
    trace { "Health: \${health}" }
}`,
  },
  {
    title: 'Pointers & Allocators (todo. fix)',
    code: `pack Node {
    var value: Int
    var label: String
}

func main() {
    // Heap allocation
    var p = alloc Node(value: 42, label: "hello")
    defer drop p // not necessary, automatically deallocated

    println("Value: \${p.value}")
    println("Label: \${p.label}")

    // Mutate through pointer
    p.value = 100
    println("Updated: \${p.value}")

    // Dereference
    fin node = *p
    println(node)
}`,
  },
]
