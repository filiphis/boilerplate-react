import * as S from './styles'

export type MainProps = {
  title: string
  description: string
}

export function Main({
  title = 'React Avançado',
  description = 'ReactJS, TypeScriptJS, NextJS e Styled Components'
}: MainProps) {
  return (
    <S.Wrapper>
      <S.Logo
        src="../../../public/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="../../../public/img/hero-illustration.svg"
        alt="Um desenvolvedor em frente a uma tela com código."
      />
    </S.Wrapper>
  )
}
