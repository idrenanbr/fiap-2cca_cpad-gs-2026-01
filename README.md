# Central de Monitoramento de Missões Espaciais

## Descrição

Este aplicativo móvel simula uma central de monitoramento de missões espaciais. Ele apresenta um painel com dados de sensores, alertas automáticos, formulários de atualização e armazenamento local persistente.

## Tecnologias

- **React Native + Expo**: framework de desenvolvimento cross‑platform
- **Expo Router**: roteamento baseado em arquivos
- **Context API**: gerenciamento global de estado
- **AsyncStorage**: persistência local
- **TypeScript**: tipagem estática

## Funcionalidades

- **Dashboards**: Exibe temperatura, pressão, nível de bateria, status de comunicação e estabilidade orbital.
- **Alertas Automáticos**: Gera alertas com níveis (`info`, `warning`, `critical`) quando parâmetros alcançam níveis críticos.
- **Formulário de Missão**: Permite atualizar nome da missão e número de tripulantes com validação de campos.
- **Configurações**: Permite simular novos dados de sensores e resetar a missão.
- **Persistência**: Todos os dados são salvos localmente em AsyncStorage.

## Estrutura de Pastas

```
app/
  _layout.tsx
  (tabs)/
    _layout.tsx
    index.tsx
    alerts.tsx
    mission.tsx
    settings.tsx
components/
  MetricCard.tsx
  AlertCard.tsx
context/
  MissionContext.tsx
constants/
  theme.ts
utils/
  validation.ts
```

## Integrantes

Equipe do projeto:

- **Auro Vanetti de Moura Andrade** – RM 563761
- **Enzo Hideki Kobayashi Nishida** – RM 565052
- **Renan Mano Otero** – RM 554911

## Instruções para Execução

1. Instale o [Node.js](https://nodejs.org/) e o [Expo CLI](https://docs.expo.dev/workflow/expo-cli/).
2. Clone este repositório e execute `npm install` para instalar as dependências.
3. Inicie o servidor de desenvolvimento com `npm start`.
4. Use o aplicativo Expo Go em seu dispositivo físico ou um emulador para visualizar a aplicação.

---

Este projeto é parte da disciplina **Cross‑Platform Application Development** e demonstra o uso de React Native com Expo, roteamento dinâmico, gerenciamento de estado via Context API, persistência local com AsyncStorage e validação de formulários.