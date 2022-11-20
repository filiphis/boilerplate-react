import { Meta, StoryObj } from '@storybook/react'
import { Main, MainProps } from '.'

export default {
  title: 'Components/Main',
  component: Main
  // args são os valores obtidos através da tipagem do componente
} as Meta<MainProps>

export const Default: StoryObj<MainProps> = {
  args: {
    title: 'React Avançado',
    description: 'ReactJS, TypeScriptJS, NextJS e Styled Components'
  }
}

export const OutroStory: StoryObj = {
  args: {
    title: 'Titulo do outro story',
    description: 'Outra Descrição'
  }
}
