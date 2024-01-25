import EditorJS, {
  BlockTool,
  BlockToolConstructorOptions,
  BlockToolData,
  API,
} from '@editorjs/editorjs';

declare var highed: any;

export interface HighchartsToolData {
  // Define the structure of chart data
}

export class HighchartsTool implements BlockTool {
  static get toolbox() {
    return {
      title: 'Highcharts',
      icon: '<svg width="2500" height="2373" viewBox="0 0 256 243" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M178.6 119.7l-1.8-3.1-60.3-19.7-1.7 2-2.6.6-53.6 125.2.7 3.8L188.4 174l1.1-2.2-9-50-1.9-2.1z" fill="#78758C"/><path d="M59.3 228.5l55.5-129.6L.8 61.7l58.5 166.8z" fill="#A3EDBA"/><path d="M157.1.3l-42.3 98.6 63.8 20.8.3-.8L157.5 1.2l-.4-.9z" fill="#8087E8"/><path d="M178.6 119.7l9.8 54.3 4.5-.1 61.1-26.5 2.7-2.3-3.2-2.7-71.9-24.2-3 1.5z" fill="#30426B"/><path d="M188.4 174l12.5 69.4 55.8-98.3-68.3 28.9zM157.1.3l21.5 119.4 78.1 25.4L157.1.3z" fill="#6699A1"/></svg>',
    };
  }

  private api: API;
  private readOnly: boolean;
  private data: HighchartsToolData;
  private wrapper: HTMLElement;
  private editor: any;

  constructor({
    data,
    api,
    readOnly,
    config,
  }: BlockToolConstructorOptions<HighchartsToolData>) {
    this.api = api;
    this.readOnly = readOnly;
    this.data = data as HighchartsToolData;
    // Use 'config' if needed for additional configurations
  }

  render() {
    this.wrapper = document.createElement('div');

    if (this.readOnly) {
      // Render a read-only version of the chart
    } else {
      this.wrapper.classList.add('highcharts-editor-container');
      this.editor = highed.Editor(this.wrapper);
    }

    return this.wrapper;
  }

  save(blockContent: HTMLElement): HighchartsToolData {
    return {
      // Return the saved data of the chart
    };
  }

  validate(savedData: BlockToolData): boolean {
    // Validate the saved data
    return true;
  }
}
