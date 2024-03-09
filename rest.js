def is_prime(n):
    """Check if a number is prime."""
    if n <= 1:
        return False
    elif n <= 3:
        return True
    elif n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Get the number from the user
num = int(input("Enter a number: "))

# Check if the number is prime and print the result
if is_prime(num):
    print(num, "is a prime number")
else:
    print(num, "is not a prime number")
