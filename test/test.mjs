import {EditorView, basicSetup} from "codemirror"
import {EditorState, Compartment} from "@codemirror/state"
import {syntaxTree} from '@codemirror/language';
import {xml} from "@codemirror/lang-xml"

function XpathEditor(where) {
  this.editor = new EditorView({
    extensions: [basicSetup],
    parent: document.getElementById(where)
  });
  this.focus = function() { this.editor.focus(); };
  this.setText = function(txt) {
    this.editor.dispatch(this.editor.state.update({
      changes: { from: 0, to: this.editor.state.doc.length, insert: txt },
      selection: { anchor: 0 }
    }));
  };
  this.getText = function() {
    return this.editor.state.doc.toString();
  };
  this.test = function() {
    var tree = syntaxTree(this.editor.state);
    if (!tree) { console.log('No tree'); return; }
    var cursor = tree.cursor();
    var txt = this.getText();
    while (true) {
      console.log(cursor.name, cursor.from, cursor.to, txt.substring(cursor.from, cursor.to).substring(0, 80));
      if (!cursor.next()) break;
    }
  };
}

function XmlEditor(where) {
  this.editor = new EditorView({
    extensions: [basicSetup, xml()],
    parent: document.getElementById(where)
  });
  this.focus = function() { this.editor.focus(); };
  this.setText = function(txt) {
    this.editor.dispatch(this.editor.state.update({
      changes: { from: 0, to: this.editor.state.doc.length, insert: txt },
      selection: { anchor: 0 }
    }));
  };
  this.getText = function() {
    return this.editor.state.doc.toString();
  };
  this.test = function() {
    var tree = syntaxTree(this.editor.state);
    if (!tree) { console.log('No tree'); return; }
    var cursor = tree.cursor();
    var txt = this.getText();
    while (true) {
      console.log(cursor.name, cursor.from, cursor.to, txt.substring(cursor.from, cursor.to).substring(0, 80));
      if (!cursor.next()) break;
    }
  };
}

window.XpathEditor = XpathEditor;
window.XmlEditor = XmlEditor;
