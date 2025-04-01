import { sum, sumArray } from '../../src/helpers/sum'

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Arrange
    const a = 1
    const b = 5

    // Act
    const result = sum(a, b)

    // Assert
    expect(result).toBe(a + b)
  })
})

describe('sumArray function', () => {
  test('should return 0 if the array is empty', () => {
    // Arrange
    const numbers: number[] = []

    // Act
    const result = sumArray(numbers)

    // Assert
    expect(result).toBe(0)
  })

  test('should return the proper value of the sumArray function', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5]

    // Act
    const result = sumArray(numbers)

    // Assert
    expect(result).toBe(15)
  })
})
