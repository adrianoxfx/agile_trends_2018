#language: pt

Funcionalidade: Chat bot

Contexto:
  Dado que estou na home do chat bot

@test
Cenário: Visualizar lista de bots
  Então vejo a lista de bots

@Test
Esquema do Cenário: Abrir conversa com bot
  Quando eu seleciono "<bot>" na lista
  Então Eu vejo a janela de conversa

  Exemplos:
  |bot         |
  |Echo Bot    |
  |Reverse Bot |
  |Waiting Bot |
  |Lady Capulet|
