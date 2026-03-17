export async function responsesLoader() {
  return {
    autoload: false,
    async getModel(sdk: any, modelID: string, _options?: Record<string, any>) {
      return sdk.responses(modelID)
    },
    options: {},
  }
}
