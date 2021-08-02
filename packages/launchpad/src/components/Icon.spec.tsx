import { ref } from 'vue'
import Icon from './Icon.vue'
import IconCoffee from 'virtual:vite-icons/mdi/coffee'
import IconHeart from 'virtual:vite-icons/mdi/heart'

describe('<Icon />', () => {
  it('handles an icon SVG', () => {
    cy.mount(() => (
      <div class="m-10 text-6xl">
        <Icon icon={IconCoffee}/>
      </div>
    )).get('svg').should('be.visible')
  })

  it('playground', () => {
    const textSizes = [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '6xl',
    ]

    const colors = [
      'rose',
      'red',
      'orange',
      'amber',
      'emerald',
      'blue',
      'indigo',
      'fuchsia',
      'pink',
    ]

    cy.mount(() => (<div class="m-10 grid gap-1rem">
      <h1 class="text-2xl text-center">Icon Sizes</h1>
      { textSizes.map((size, i) => (
        <span class={`text-${size} text-${colors[i]}-500 text-center`}>
          {size }<Icon icon={IconHeart}></Icon>
        </span>))
      }
    </div>
    ))
  })
})