import { Component, OnDestroy, OnInit } from '@angular/core';
import { HighchartsTool } from '../block-tools/highcharts-tool';
import EditorJS, { ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import ImageTool from '@editorjs/image';
// @ts-ignore
import NestedList from '@editorjs/nested-list';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import Delimiter from '@editorjs/delimiter';
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import Undo from 'editorjs-undo';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
})
export class EditorComponent implements OnInit, OnDestroy {
  editor: EditorJS;
  constructor() {}

  ngOnInit(): void {
    this.editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        const editor = this.editor;
        new Undo({ editor });
      },
      // Add tools configurations here
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // endpoint that provides uploading by Url
            },
          },
        },
        marker: {
          class: Marker,
        },
        delimiter: Delimiter,
        highcharts: HighchartsTool,
      },
    });
  }

  ngOnDestroy() {
    this.editor.destroy();
  }
}
