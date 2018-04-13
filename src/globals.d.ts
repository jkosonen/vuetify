import { VueConstructor, ComponentOptions, PluginFunction } from 'vue'
import { CombinedVueInstance, ExtendedVue, OptionsConstructor, Vue } from 'vue/types/vue'

declare global {
  interface Window {
    Vue: VueConstructor
  }
}

declare module 'vue/types/vue' {
  export type OptionsVue<Instance extends Vue, Data, Methods, Computed, Props> = OptionsConstructor<CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue>

  interface VueConstructor {
    version: string,
    install?: PluginFunction<never>
  }
  export interface OptionsConstructor<V extends Vue = Vue> extends VueConstructor<V> {
    options?: ComponentOptions<V>
  }
}
