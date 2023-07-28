import { type App } from 'vue';
import * as icons from './components';
export interface InstallOptions {
    /** @default `ElIcon` */
    prefix?: string;
}
declare const _default: (app: App, { prefix }?: InstallOptions) => void;
export default _default;
export { icons };
export * from './components';
