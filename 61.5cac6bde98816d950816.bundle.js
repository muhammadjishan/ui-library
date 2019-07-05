(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1225:function(n,o,l){"use strict";var s=l(35);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=s(l(411));function t(){var n=(0,r.default)(["\n\n  \n  \n/*\n * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>\n * Copyright (c) 2017-present Sven Greb <development@svengreb.de>\n *\n * Project:    Nord highlight.js\n * Version:    0.1.0\n * Repository: https://github.com/arcticicestudio/nord-highlightjs\n * License:    MIT\n * References:\n *   https://github.com/arcticicestudio/nord\n */\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #2E3440;\n}\n\n.hljs,\n.hljs-subst {\n  color: #D8DEE9;\n}\n\n.hljs-selector-tag {\n  color: #81A1C1;\n}\n\n.hljs-selector-id {\n  color: #8FBCBB;\n  font-weight: bold;\n}\n\n.hljs-selector-class {\n  color: #8FBCBB;\n}\n\n.hljs-selector-attr {\n  color: #8FBCBB;\n}\n\n.hljs-selector-pseudo {\n  color: #88C0D0;\n}\n\n.hljs-addition {\n  background-color: rgba(163, 190, 140, 0.5);\n}\n\n.hljs-deletion {\n  background-color: rgba(191, 97, 106, 0.5);\n}\n\n.hljs-built_in,\n.hljs-type {\n  color: #8FBCBB;\n}\n\n.hljs-class {\n  color: #8FBCBB;\n}\n\n.hljs-function {\n  color: #88C0D0;\n}\n\n.hljs-function > .hljs-title {\n  color: #88C0D0;\n}\n\n.hljs-keyword,\n.hljs-literal,\n.hljs-symbol {\n  color: #81A1C1;\n}\n\n.hljs-number {\n  color: #B48EAD;\n}\n\n.hljs-regexp {\n  color: #EBCB8B;\n}\n\n.hljs-string {\n  color: #A3BE8C;\n}\n\n.hljs-title {\n  color: #8FBCBB;\n}\n\n.hljs-params {\n  color: #D8DEE9;\n}\n\n.hljs-bullet {\n  color: #81A1C1;\n}\n\n.hljs-code {\n  color: #8FBCBB;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-formula {\n  color: #8FBCBB;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link:hover {\n  text-decoration: underline;\n}\n\n.hljs-quote {\n  color: #4C566A;\n}\n\n.hljs-comment {\n  color: #4C566A;\n}\n\n.hljs-doctag {\n  color: #8FBCBB;\n}\n\n.hljs-meta,\n.hljs-meta-keyword {\n  color: #5E81AC;\n}\n\n.hljs-meta-string {\n  color: #A3BE8C;\n}\n\n.hljs-attr {\n  color: #8FBCBB;\n}\n\n.hljs-attribute {\n  color: #D8DEE9;\n}\n\n.hljs-builtin-name {\n  color: #81A1C1;\n}\n\n.hljs-name {\n  color: #81A1C1;\n}\n\n.hljs-section {\n  color: #88C0D0;\n}\n\n.hljs-tag {\n  color: #81A1C1;\n}\n\n.hljs-variable {\n  color: #D8DEE9;\n}\n\n.hljs-template-variable {\n  color: #D8DEE9;\n}\n\n.hljs-template-tag {\n  color: #5E81AC;\n}\n\n.abnf .hljs-attribute {\n  color: #88C0D0;\n}\n\n.abnf .hljs-symbol {\n  color: #EBCB8B;\n}\n\n.apache .hljs-attribute {\n  color: #88C0D0;\n}\n\n.apache .hljs-section {\n  color: #81A1C1;\n}\n\n.arduino .hljs-built_in {\n  color: #88C0D0;\n}\n\n.aspectj .hljs-meta {\n  color: #D08770;\n}\n\n.aspectj > .hljs-title {\n  color: #88C0D0;\n}\n\n.bnf .hljs-attribute {\n  color: #8FBCBB;\n}\n\n.clojure .hljs-name {\n  color: #88C0D0;\n}\n\n.clojure .hljs-symbol {\n  color: #EBCB8B;\n}\n\n.coq .hljs-built_in {\n  color: #88C0D0;\n}\n\n.cpp .hljs-meta-string {\n  color: #8FBCBB;\n}\n\n.css .hljs-built_in {\n  color: #88C0D0;\n}\n\n.css .hljs-keyword {\n  color: #D08770;\n}\n\n.diff .hljs-meta {\n  color: #8FBCBB;\n}\n\n.ebnf .hljs-attribute {\n  color: #8FBCBB;\n}\n\n.glsl .hljs-built_in {\n  color: #88C0D0;\n}\n\n.groovy .hljs-meta:not(:first-child) {\n  color: #D08770;\n}\n\n.haxe .hljs-meta {\n  color: #D08770;\n}\n\n.java .hljs-meta {\n  color: #D08770;\n}\n\n.ldif .hljs-attribute {\n  color: #8FBCBB;\n}\n\n.lisp .hljs-name {\n  color: #88C0D0;\n}\n\n.lua .hljs-built_in {\n  color: #88C0D0;\n}\n\n.moonscript .hljs-built_in {\n  color: #88C0D0;\n}\n\n.nginx .hljs-attribute {\n  color: #88C0D0;\n}\n\n.nginx .hljs-section {\n  color: #5E81AC;\n}\n\n.pf .hljs-built_in {\n  color: #88C0D0;\n}\n\n.processing .hljs-built_in {\n  color: #88C0D0;\n}\n\n.scss .hljs-keyword {\n  color: #81A1C1;\n}\n\n.stylus .hljs-keyword {\n  color: #81A1C1;\n}\n\n.swift .hljs-meta {\n  color: #D08770;\n}\n\n.vim .hljs-built_in {\n  color: #88C0D0;\n  font-style: italic;\n}\n\n.yaml .hljs-meta {\n  color: #D08770;\n}\n\n\n  \n  \n"]);return t=function(){return n},n}var c=(0,s(l(412)).default)(t());o.default=c}}]);