import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

describe('<MyCounter />', () => {
  test('should match the snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    })

    console.log(wrapper.html())

    // Arrange
    // Act
    // Assert
  })
})
