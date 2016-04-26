// :paste projecteuler551.scala

def sum_j(a: Long, b: Long = 0): Long = {
   if (a < 10) a + b
   else sum_j(a / 10, (a % 10) + b)
}

def a(n: Long, s: Long = 1L): Long = {
	if (n < 2L) s
	else a(n - 1, s + sum_j(s))
}

println((0 to 10).map(i => a(i)))
println(a(1000000L)) // 31054319
println(a(1000000000000000L))
