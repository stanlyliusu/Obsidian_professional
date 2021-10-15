{
	"translatorID": "19afa3fd-1c7f-4eb8-a37e-8d07768493e8",
	"label": "Citation graph",
	"description": "exports a citation graph in graphml format. Use gephi or yEd to clean up and visualize",
	"creator": "Emiliano heyns",
	"target": "dot",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"inRepository": false,
	"displayOptions": {
		"Title": false,
		"Authors": false,
		"Year": false
	},
	"priority": 100,
	"configOptions": {
		"hash": "4c4c91a0b114c1437f72660c5658f9fad2a8ead3da4e3f47947f6852a52c55d8"
	},
	"lastUpdated": "2021-10-09"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors"}
var global = Function("return this")();
if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {"translatorID":"19afa3fd-1c7f-4eb8-a37e-8d07768493e8","label":"Citation graph","description":"exports a citation graph in graphml format. Use gephi or yEd to clean up and visualize","creator":"Emiliano heyns","target":"dot","minVersion":"4.0.27","maxVersion":"","translatorType":2,"browserSupport":"gcsv","inRepository":false,"displayOptions":{"Title":false,"Authors":false,"Year":false},"priority":100};
var Citationgraph__Translator__doExport = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/safe-stable-stringify/index.js
  var require_safe_stable_stringify = __commonJS({
    "node_modules/safe-stable-stringify/index.js"(exports, module) {
      var stringify2 = main();
      stringify2.configure = main;
      stringify2.default = stringify2;
      module.exports = stringify2;
      var strEscapeSequencesRegExp = /[\x00-\x1f\x22\x5c]/;
      var strEscapeSequencesReplacer = /[\x00-\x1f\x22\x5c]/g;
      var meta = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000b",
        "\\f",
        "\\r",
        "\\u000e",
        "\\u000f",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001a",
        "\\u001b",
        "\\u001c",
        "\\u001d",
        "\\u001e",
        "\\u001f",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\"
      ];
      function escapeFn(str) {
        return meta[str.charCodeAt(0)];
      }
      function strEscape(str) {
        if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
          return str;
        }
        if (str.length > 100) {
          return str.replace(strEscapeSequencesReplacer, escapeFn);
        }
        let result = "";
        let last = 0;
        let i = 0;
        for (; i < str.length; i++) {
          const point = str.charCodeAt(i);
          if (point === 34 || point === 92 || point < 32) {
            if (last === i) {
              result += meta[point];
            } else {
              result += `${str.slice(last, i)}${meta[point]}`;
            }
            last = i + 1;
          }
        }
        if (last === 0) {
          result = str;
        } else if (last !== i) {
          result += str.slice(last);
        }
        return result;
      }
      function insertSort(array) {
        if (array.length > 200) {
          return array.sort();
        }
        for (let i = 1; i < array.length; i++) {
          const currentValue = array[i];
          let position = i;
          while (position !== 0 && array[position - 1] > currentValue) {
            array[position] = array[position - 1];
            position--;
          }
          array[position] = currentValue;
        }
        return array;
      }
      var typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())), Symbol.toStringTag).get;
      function isTypedArray(value) {
        return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0;
      }
      function stringifyTypedArray(array, separator) {
        if (array.length === 0) {
          return "";
        }
        const whitespace = separator === "," ? "" : " ";
        let res = `"0":${whitespace}${array[0]}`;
        for (let i = 1; i < array.length; i++) {
          res += `${separator}"${i}":${whitespace}${array[i]}`;
        }
        return res;
      }
      function getCircularValueOption(options) {
        if (options && Object.prototype.hasOwnProperty.call(options, "circularValue")) {
          var circularValue = options.circularValue;
          if (typeof circularValue === "string") {
            circularValue = `"${circularValue}"`;
          } else if (circularValue !== null) {
            throw new TypeError('The "circularValue" argument must be of type string or the value null');
          }
        }
        return circularValue === void 0 ? '"[Circular]"' : circularValue;
      }
      function getBigIntOption(options) {
        if (options && Object.prototype.hasOwnProperty.call(options, "bigint")) {
          var bigint = options.bigint;
          if (typeof bigint !== "boolean") {
            throw new TypeError('The "bigint" argument must be of type boolean');
          }
        }
        return bigint === void 0 ? true : bigint;
      }
      function getDeterministicOption(options) {
        if (options && Object.prototype.hasOwnProperty.call(options, "deterministic")) {
          var deterministic = options.deterministic;
          if (typeof deterministic !== "boolean") {
            throw new TypeError('The "deterministic" argument must be of type boolean');
          }
        }
        return deterministic === void 0 ? true : deterministic;
      }
      function main(options) {
        const circularValue = getCircularValueOption(options);
        const bigint = getBigIntOption(options);
        const deterministic = getDeterministicOption(options);
        function stringifyFullFn(key, parent, stack, replacer, spacer, indentation) {
          let value = parent[key];
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
          value = replacer.call(parent, key, value);
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              let res = "";
              let join = ",";
              const originalIndentation = indentation;
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                stack.push(value);
                if (spacer !== "") {
                  indentation += spacer;
                  res += `
${indentation}`;
                  join = `,
${indentation}`;
                }
                let i = 0;
                for (; i < value.length - 1; i++) {
                  const tmp2 = stringifyFullFn(i, value, stack, replacer, spacer, indentation);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += join;
                }
                const tmp = stringifyFullFn(i, value, stack, replacer, spacer, indentation);
                res += tmp !== void 0 ? tmp : "null";
                if (spacer !== "") {
                  res += `
${originalIndentation}`;
                }
                stack.pop();
                return `[${res}]`;
              }
              let keys = Object.keys(value);
              if (keys.length === 0) {
                return "{}";
              }
              let whitespace = "";
              let separator = "";
              if (spacer !== "") {
                indentation += spacer;
                join = `,
${indentation}`;
                whitespace = " ";
              }
              if (isTypedArray(value)) {
                res += stringifyTypedArray(value, join);
                keys = keys.slice(value.length);
                separator = join;
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (const key2 of keys) {
                const tmp = stringifyFullFn(key2, value, stack, replacer, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}":${whitespace}${tmp}`;
                  separator = join;
                }
              }
              if (spacer !== "" && separator.length > 1) {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifyFullArr(key, value, stack, replacer, spacer, indentation) {
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              const originalIndentation = indentation;
              let res = "";
              let join = ",";
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                stack.push(value);
                if (spacer !== "") {
                  indentation += spacer;
                  res += `
${indentation}`;
                  join = `,
${indentation}`;
                }
                let i = 0;
                for (; i < value.length - 1; i++) {
                  const tmp2 = stringifyFullArr(i, value[i], stack, replacer, spacer, indentation);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += join;
                }
                const tmp = stringifyFullArr(i, value[i], stack, replacer, spacer, indentation);
                res += tmp !== void 0 ? tmp : "null";
                if (spacer !== "") {
                  res += `
${originalIndentation}`;
                }
                stack.pop();
                return `[${res}]`;
              }
              if (replacer.length === 0) {
                return "{}";
              }
              stack.push(value);
              let whitespace = "";
              if (spacer !== "") {
                indentation += spacer;
                join = `,
${indentation}`;
                whitespace = " ";
              }
              let separator = "";
              for (const key2 of replacer) {
                if (typeof key2 === "string" || typeof key2 === "number") {
                  const tmp = stringifyFullArr(key2, value[key2], stack, replacer, spacer, indentation);
                  if (tmp !== void 0) {
                    res += `${separator}"${strEscape(key2)}":${whitespace}${tmp}`;
                    separator = join;
                  }
                }
              }
              if (spacer !== "" && separator.length > 1) {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifyIndent(key, value, stack, spacer, indentation) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key);
                if (typeof value !== "object") {
                  return stringifyIndent(key, value, stack, spacer, indentation);
                }
                if (value === null) {
                  return "null";
                }
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              const originalIndentation = indentation;
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                stack.push(value);
                indentation += spacer;
                let res2 = `
${indentation}`;
                const join2 = `,
${indentation}`;
                let i = 0;
                for (; i < value.length - 1; i++) {
                  const tmp2 = stringifyIndent(i, value[i], stack, spacer, indentation);
                  res2 += tmp2 !== void 0 ? tmp2 : "null";
                  res2 += join2;
                }
                const tmp = stringifyIndent(i, value[i], stack, spacer, indentation);
                res2 += tmp !== void 0 ? tmp : "null";
                res2 += `
${originalIndentation}`;
                stack.pop();
                return `[${res2}]`;
              }
              let keys = Object.keys(value);
              if (keys.length === 0) {
                return "{}";
              }
              indentation += spacer;
              const join = `,
${indentation}`;
              let res = "";
              let separator = "";
              if (isTypedArray(value)) {
                res += stringifyTypedArray(value, join);
                keys = keys.slice(value.length);
                separator = join;
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (const key2 of keys) {
                const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}": ${tmp}`;
                  separator = join;
                }
              }
              if (separator !== "") {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifySimple(key, value, stack) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key);
                if (typeof value !== "object") {
                  return stringifySimple(key, value, stack);
                }
                if (value === null) {
                  return "null";
                }
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              let res = "";
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                stack.push(value);
                let i = 0;
                for (; i < value.length - 1; i++) {
                  const tmp2 = stringifySimple(i, value[i], stack);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += ",";
                }
                const tmp = stringifySimple(i, value[i], stack);
                res += tmp !== void 0 ? tmp : "null";
                stack.pop();
                return `[${res}]`;
              }
              let keys = Object.keys(value);
              if (keys.length === 0) {
                return "{}";
              }
              let separator = "";
              if (isTypedArray(value)) {
                res += stringifyTypedArray(value, ",");
                keys = keys.slice(value.length);
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (const key2 of keys) {
                const tmp = stringifySimple(key2, value[key2], stack);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}":${tmp}`;
                  separator = ",";
                }
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringify3(value, replacer, space) {
          if (arguments.length > 1) {
            let spacer = "";
            if (typeof space === "number") {
              spacer = " ".repeat(space);
            } else if (typeof space === "string") {
              spacer = space;
            }
            if (replacer != null) {
              if (typeof replacer === "function") {
                return stringifyFullFn("", { "": value }, [], replacer, spacer, "");
              }
              if (Array.isArray(replacer)) {
                return stringifyFullArr("", value, [], replacer, spacer, "");
              }
            }
            if (spacer !== "") {
              return stringifyIndent("", value, [], spacer, "");
            }
          }
          return stringifySimple("", value, []);
        }
        return stringify3;
      }
    }
  });

  // translators/Citation graph.ts
  var Citation_graph_exports = {};
  __export(Citation_graph_exports, {
    Translator: () => Translator,
    doExport: () => doExport
  });

  // gen/preferences/meta.ts
  var names = [
    "ascii",
    "asciiBibLaTeX",
    "asciiBibTeX",
    "autoAbbrev",
    "autoAbbrevStyle",
    "autoExport",
    "autoExportDelay",
    "autoExportIdleWait",
    "autoExportPathReplaceDiacritics",
    "autoExportPathReplaceDirSep",
    "autoExportPathReplaceSpace",
    "automaticTags",
    "autoPinDelay",
    "auxImport",
    "baseAttachmentPath",
    "biblatexExtendedDateFormat",
    "biblatexExtendedNameFormat",
    "biblatexExtractEprint",
    "bibtexParticleNoOp",
    "bibtexURL",
    "cacheFlushInterval",
    "caching",
    "citeCommand",
    "citekeyFold",
    "citekeyFormat",
    "citekeySearch",
    "citeprocNoteCitekey",
    "csquotes",
    "DOIandURL",
    "exportBibTeXStrings",
    "exportBraceProtection",
    "exportTitleCase",
    "extraMergeCitekeys",
    "extraMergeCSL",
    "extraMergeTeX",
    "git",
    "import",
    "importBibTeXStrings",
    "importCaseProtection",
    "importCitationKey",
    "importExtra",
    "importJabRefAbbreviations",
    "importJabRefStrings",
    "importSentenceCase",
    "importUnknownTexCommand",
    "itemObserverDelay",
    "jabrefFormat",
    "jieba",
    "keyConflictPolicy",
    "keyScope",
    "kuroshiro",
    "mapMath",
    "mapText",
    "mapUnicode",
    "newTranslatorsAskRestart",
    "parseParticles",
    "patchDates",
    "platform",
    "postscript",
    "postscriptOverride",
    "preferencesOverride",
    "qualityReport",
    "quickCopyEta",
    "quickCopyMode",
    "quickCopyOrgMode",
    "quickCopyPandocBrackets",
    "quickCopySelectLink",
    "rawImports",
    "rawLaTag",
    "relativeFilePaths",
    "retainCache",
    "scrubDatabase",
    "separatorList",
    "separatorNames",
    "skipFields",
    "skipWords",
    "startupProgress",
    "strings",
    "testing",
    "verbatimFields",
    "warnBulkModify",
    "warnTitleCased",
    "workers"
  ];
  var affects = {
    ascii: ["Better BibLaTeX", "Better BibTeX"],
    asciiBibLaTeX: ["Better BibLaTeX"],
    asciiBibTeX: ["Better BibTeX"],
    autoAbbrev: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    autoAbbrevStyle: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    automaticTags: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    baseAttachmentPath: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    biblatexExtendedDateFormat: ["Better BibLaTeX"],
    biblatexExtendedNameFormat: ["Better BibLaTeX"],
    biblatexExtractEprint: ["Better BibLaTeX", "Better BibTeX"],
    bibtexParticleNoOp: ["Better BibTeX"],
    bibtexURL: ["Better BibTeX"],
    caching: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    citeprocNoteCitekey: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    csquotes: ["Better BibLaTeX", "Better BibTeX"],
    DOIandURL: ["Better BibLaTeX", "Better BibTeX"],
    exportBibTeXStrings: ["Better BibLaTeX", "Better BibTeX"],
    exportBraceProtection: ["Better BibLaTeX", "Better BibTeX"],
    exportTitleCase: ["Better BibLaTeX", "Better BibTeX"],
    jabrefFormat: ["Better BibLaTeX", "Better BibTeX"],
    mapMath: ["Better BibLaTeX", "Better BibTeX"],
    mapText: ["Better BibLaTeX", "Better BibTeX"],
    mapUnicode: ["Better BibLaTeX", "Better BibTeX"],
    parseParticles: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    postscript: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    qualityReport: ["Better BibLaTeX", "Better BibTeX"],
    rawLaTag: ["Better BibLaTeX", "Better BibTeX"],
    relativeFilePaths: ["Better BibLaTeX", "Better BibTeX"],
    separatorList: ["Better BibLaTeX", "Better BibTeX"],
    separatorNames: ["Better BibLaTeX", "Better BibTeX"],
    skipFields: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    skipWords: ["Better BibLaTeX", "Better BibTeX"],
    strings: ["Better BibLaTeX", "Better BibTeX"]
  };
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: false,
    biblatexExtractEprint: true,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cacheFlushInterval: 5,
    caching: true,
    citeCommand: "cite",
    citekeyFold: true,
    citekeyFormat: "[auth:lower][shorttitle3_3][year]",
    citekeySearch: true,
    citeprocNoteCitekey: false,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importSentenceCase: "on+guess",
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    mapMath: "",
    mapText: "",
    mapUnicode: "conservative",
    newTranslatorsAskRestart: true,
    parseParticles: true,
    patchDates: "",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    testing: false,
    verbatimFields: "url,doi,file,ids,eprint,verba,verbb,verbc,groups",
    warnBulkModify: 10,
    warnTitleCased: false,
    workers: 1
  };
  var schema = {
    autoExport: {
      preferences: ["asciiBibLaTeX", "asciiBibTeX", "biblatexExtendedNameFormat", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
      displayOptions: ["useJournalAbbreviation", "exportNotes"]
    },
    translator: {
      "Better CSL JSON": {
        autoexport: true,
        cached: true,
        preferences: [],
        displayOptions: [],
        types: {}
      },
      "BetterBibTeX JSON": {
        autoexport: true,
        cached: false,
        preferences: [],
        displayOptions: ["exportNotes"],
        types: {
          exportNotes: { type: "boolean" }
        }
      },
      "Better BibLaTeX": {
        autoexport: true,
        cached: true,
        preferences: ["asciiBibLaTeX", "biblatexExtendedNameFormat", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"],
        types: {
          asciiBibLaTeX: { type: "boolean" },
          biblatexExtendedNameFormat: { type: "boolean" },
          DOIandURL: { enum: ["both", "doi", "url"] },
          exportNotes: { type: "boolean" },
          useJournalAbbreviation: { type: "boolean" }
        }
      },
      "Better CSL YAML": {
        autoexport: true,
        cached: true,
        preferences: [],
        displayOptions: [],
        types: {}
      },
      "Better BibTeX": {
        autoexport: true,
        cached: true,
        preferences: ["asciiBibTeX", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"],
        types: {
          asciiBibTeX: { type: "boolean" },
          bibtexParticleNoOp: { type: "boolean" },
          bibtexURL: { enum: ["off", "note", "note-url-ish", "url", "url-ish"] },
          DOIandURL: { enum: ["both", "doi", "url"] },
          exportNotes: { type: "boolean" },
          useJournalAbbreviation: { type: "boolean" }
        }
      }
    }
  };

  // content/client.ts
  if (typeof Components !== "undefined")
    Components.utils.import("resource://zotero/config.js");
  var client = ZOTERO_CONFIG.GUID.replace(/@.*/, "").replace("-", "");

  // node_modules/safe-stable-stringify/esm/wrapper.js
  var import__ = __toModule(require_safe_stable_stringify());
  var configure = import__.default.configure;
  var wrapper_default = import__.default;

  // content/stringify.ts
  function asciify(str) {
    return str.replace(/[\u007F-\uFFFF]/g, (chr) => `\\u${`0000${chr.charCodeAt(0).toString(16)}`.substr(-4)}`);
  }
  function stringify(obj, replacer, indent, ucode) {
    const stringified = wrapper_default(obj, replacer, indent);
    return ucode ? asciify(stringified) : stringified;
  }

  // content/environment.ts
  var worker = typeof WorkerGlobalScope !== "undefined" && typeof importScripts === "function" && navigator instanceof WorkerNavigator;

  // content/logger.ts
  var inTranslator = worker || typeof ZOTERO_TRANSLATOR_INFO !== "undefined";
  var Logger = class {
    constructor() {
      this.verbose = false;
    }
    format({ error = false, worker: worker2 = "", translator = "" }, msg) {
      let diff = null;
      const now = Date.now();
      if (this.timestamp)
        diff = now - this.timestamp;
      this.timestamp = now;
      if (typeof msg !== "string") {
        let output = "";
        for (const m of msg) {
          const type = typeof m;
          if (type === "string" || m instanceof String || type === "number" || type === "undefined" || type === "boolean" || m === null) {
            output += m;
          } else if (m instanceof Error || m instanceof ErrorEvent || m.toString() === "[object ErrorEvent]") {
            output += this.formatError(m);
          } else if (m && type === "object" && m.message) {
            output += this.formatError({ message: m.errorCode ? `${m.message} (${m.errorCode})` : m.message, filename: m.fileName, lineno: m.lineNumber, colno: m.column, stack: m.stack });
          } else if (this.verbose) {
            output += stringify(m, null, 2);
          } else {
            output += stringify(m);
          }
          output += " ";
        }
        msg = output;
      }
      if (worker) {
        worker2 = worker2 || workerContext.worker;
        translator = translator || workerContext.translator;
      } else {
        if (worker2)
          worker2 = `${worker2} (but inWorker is false?)`;
        if (!translator && inTranslator)
          translator = ZOTERO_TRANSLATOR_INFO.label;
      }
      const prefix = ["better-bibtex", translator, error && "error", worker2 && `(worker ${worker2})`].filter((p) => p).join(" ");
      return `{${prefix}} +${diff} ${asciify(msg)}`;
    }
    formatError(e, indent = "") {
      let msg = [e.name, e.message].filter((s) => s).join(": ");
      if (e.filename || e.fileName)
        msg += ` in ${e.filename || e.fileName}`;
      if (e.lineno || e.lineNumber) {
        msg += ` line ${e.lineno}`;
        if (e.colno)
          msg += `, col ${e.colno}`;
      }
      if (e.stack)
        msg += `
${indent}${e.stack.replace(/\n/g, `${indent}
`)}`;
      if (e.error)
        msg += `
${indent}${this.formatError(e.error, "  ")}
`;
      return `${indent}<Error: ${msg}>`;
    }
    get enabled() {
      if (!inTranslator)
        return Zotero.Debug.enabled;
      if (!worker)
        return true;
      return !workerContext || workerContext.debugEnabled;
    }
    debug(...msg) {
      if (this.enabled)
        Zotero.debug(this.format({}, msg));
    }
    error(...msg) {
      Zotero.debug(this.format({ error: true }, msg));
    }
    status({ error = false, worker: worker2 = "", translator = "" }, ...msg) {
      if (error || this.enabled)
        Zotero.debug(this.format({ error, worker: worker2, translator }, msg));
    }
  };
  var log = new Logger();

  // content/ping.ts
  var Pinger = class {
    constructor({ start = 0, total, step = 5, name = "", callback }) {
      this.incr = 100 / total;
      this.name = name;
      this.pct = start * this.incr;
      this.step = step;
      this.callback = callback;
      this.next = Math.floor(this.pct / step) * step;
      if (this.name)
        Zotero.debug(`ping: ${name} start ${JSON.stringify({ ...this, start, total })}`);
      this.emit();
    }
    update() {
      this.pct += this.incr;
      if (this.name)
        Zotero.debug(`ping: ${this.name} update to ${this.pct}`);
      if (Math.round(this.pct) >= this.next)
        this.emit();
    }
    emit() {
      if (this.callback) {
        if (this.name)
          Zotero.debug(`ping: ${this.name} emit ${Math.min(this.next, 100)}`);
        this.callback(Math.min(this.next, 100));
        if (this.next > 100)
          this.callback = null;
        this.next += this.step;
      }
    }
    done() {
      if (this.name)
        Zotero.debug(`ping: ${this.name} done`);
      if (this.callback && this.pct < this.next)
        this.callback(Math.min(this.next, 100));
    }
  };

  // translators/lib/translator.ts
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
  }();
  var Items = class {
    constructor(cacheable) {
      this.list = [];
      this.map = {};
      let item;
      while (item = Zotero.nextItem()) {
        item.$cacheable = cacheable;
        item.journalAbbreviation = item.journalAbbreviation || item.autoJournalAbbreviation;
        this.list.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      }
      this.list.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
      this.ping = new Pinger({
        total: this.list.length,
        callback: (pct) => worker ? Zotero.BetterBibTeX.setProgress(pct) : null
      });
    }
    *items() {
      for (const item of this.list) {
        yield this.current = item;
        this.ping.update();
      }
      this.ping.done();
    }
    *references() {
      for (const item of this.list) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
        this.ping.update();
      }
      this.ping.done();
    }
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  var ITranslator = class {
    constructor() {
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.initialized = false;
      this.header = ZOTERO_TRANSLATOR_INFO;
      this[this.header.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.preferences = defaults;
      this.options = this.header.displayOptions || {};
      const collator = new Intl.Collator("en");
      this.stringCompare = collator.compare.bind(collator);
    }
    get exportDir() {
      this._items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this._items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    init(mode) {
      var _a, _b, _c, _d, _e;
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      for (const key in this.options) {
        if (typeof this.options[key] === "boolean") {
          this.options[key] = !!Zotero.getOption(key);
        } else {
          this.options[key] = Zotero.getOption(key);
        }
      }
      if (mode === "export") {
        this.cache = {
          hits: 0,
          misses: 0
        };
        this.export = {
          dir: Zotero.getOption("exportDir"),
          path: Zotero.getOption("exportPath")
        };
        if ((_a = this.export.dir) == null ? void 0 : _a.endsWith(this.paths.sep))
          this.export.dir = this.export.dir.slice(0, -1);
      }
      for (const pref of Object.keys(this.preferences)) {
        let value;
        try {
          value = Zotero.getOption(`preference_${pref}`);
        } catch (err) {
          value = void 0;
        }
        if (typeof value === "undefined")
          value = Zotero.getHiddenPref(`better-bibtex.${pref}`);
        this.preferences[pref] = value;
      }
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      this.skipField = this.skipFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
      if (mode === "export") {
        this.unicode = !Translator.preferences[`ascii${this.header.label.replace(/Better /, "")}`];
        if (this.preferences.baseAttachmentPath && (this.export.dir === this.preferences.baseAttachmentPath || ((_b = this.export.dir) == null ? void 0 : _b.startsWith(this.preferences.baseAttachmentPath + this.paths.sep)))) {
          this.preferences.relativeFilePaths = true;
        }
        this.cacheable = Zotero.getOption("caching") && !(this.options.exportFileData || this.preferences.relativeFilePaths || this.preferences.baseAttachmentPath && ((_c = this.export.dir) == null ? void 0 : _c.startsWith(this.preferences.baseAttachmentPath)));
        if (this.BetterTeX) {
          Translator.preferences.separatorList = Translator.preferences.separatorList.trim();
          Translator.preferences.separatorNames = Translator.preferences.separatorNames.trim();
          this.and = {
            list: {
              re: new RegExp(escapeRegExp(Translator.preferences.separatorList), "g"),
              repl: ` {${Translator.preferences.separatorList}} `
            },
            names: {
              re: new RegExp(` ${escapeRegExp(Translator.preferences.separatorNames)} `, "g"),
              repl: ` {${Translator.preferences.separatorNames}} `
            }
          };
          Translator.preferences.separatorList = ` ${Translator.preferences.separatorList} `;
          Translator.preferences.separatorNames = ` ${Translator.preferences.separatorNames} `;
        }
      }
      this.collections = {};
      if (mode === "export" && ((_d = this.header.configOptions) == null ? void 0 : _d.getCollections) && Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          log.debug("getCollection:", collection);
          this.registerCollection(collection, "");
        }
      }
      if (!this.initialized && mode === "export" && this.preferences.testing && typeof __estrace === "undefined" && ((_e = schema.translator[this.header.label]) == null ? void 0 : _e.cached)) {
        const ignored = ["testing"];
        this.preferences = new Proxy(this.preferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            var _a2;
            if (property === "toJSON")
              return object[property];
            if (!names.includes(property))
              throw new TypeError(`Unsupported preference ${property}`);
            if (!ignored.includes(property) && !((_a2 = affects[property]) == null ? void 0 : _a2.includes(this.header.label)))
              throw new TypeError(`Preference ${property} claims not to affect ${this.header.label}`);
            return object[property];
          }
        });
      }
      this.initialized = true;
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      const children = collection.children || collection.descendents || [];
      const collections = children.filter((coll) => coll.type === "collection");
      this.collections[key] = {
        key,
        parent,
        name: collection.name,
        collections: collections.map((coll) => coll.key),
        items: children.filter((coll) => coll.type === "item").map((item) => item.id)
      };
      for (collection of collections) {
        this.registerCollection(collection, key);
      }
    }
    get collectionTree() {
      return Object.values(this.collections).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      this._items = this._items || new Items(this.cacheable);
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this._items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.collections[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
    get items() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.items();
    }
    get references() {
      this._items = this._items || new Items(this.cacheable);
      return this._items.references();
    }
  };
  var Translator = new ITranslator();

  // translators/Citation graph.ts
  function node(id, attributes = {}) {
    let n = JSON.stringify(id);
    const attrs = Object.entries(attributes).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(", ");
    if (attrs)
      n += ` [${attrs}]`;
    Zotero.write(`  ${n};
`);
  }
  function edge(source, target, attributes = {}) {
    let e = `${JSON.stringify(source)} -> ${JSON.stringify(target)}`;
    const attrs = Object.entries(attributes).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(", ");
    if (attrs)
      e += ` [${attrs}]`;
    Zotero.write(`  ${e};
`);
  }
  function doExport() {
    var _a, _b;
    Translator.init("export");
    Zotero.write("digraph CitationGraph {\n");
    Zotero.write("  concentrate=true;\n");
    const add = {
      title: Zotero.getOption("Title"),
      authors: Zotero.getOption("Authors"),
      year: Zotero.getOption("Year")
    };
    const items = [];
    for (const ref of Translator.references) {
      const label = [ref.citationKey];
      if (add.title && ref.title) {
        label.push(`\u201C${ref.title.replace(/"/g, "'")}\u201D`);
      }
      const author = [];
      if (add.authors && ref.creators && ref.creators.length) {
        const name = (_a = ref.creators) == null ? void 0 : _a.map((creator) => (creator.name || creator.lastName || "").replace(/"/g, "'")).filter((creator) => creator).join(", ");
        if (name)
          author.push(name);
      }
      if (add.year && ref.date) {
        let date = Zotero.BetterBibTeX.parseDate(ref.date);
        if (date.from)
          date = date.from;
        if (date.year)
          author.push(`(${date.year})`);
      }
      if (author.length)
        label.push(author.join(" "));
      items.push({
        id: `node-${ref.uri.replace(/.*\//, "")}`,
        label: label.join("\n"),
        relations: ((_b = ref.relations) == null ? void 0 : _b["dc:relation"]) || [],
        cites: [].concat.apply([], (ref.extra || "").split("\n").filter((line) => line.startsWith("cites:")).map((line) => line.replace(/^cites:/, "").trim()).filter((keys) => keys).map((keys) => keys.split(/\s*,\s*/))),
        citationKey: ref.citationKey,
        uri: ref.uri
      });
    }
    for (const item of items) {
      node(item.id, { label: item.label });
      for (const uri of item.relations) {
        const other = items.find((o) => o.uri === uri);
        if (other) {
          edge(item.id, other.id);
        } else {
          edge(item.id, uri.replace(/.*\//, ""), { style: "dashed", dir: "both" });
        }
      }
      for (const citationKey of item.cites) {
        const other = items.find((o) => o.citationKey === citationKey);
        if (other) {
          edge(item.id, other.id);
        } else {
          edge(item.id, citationKey, { style: "dashed" });
        }
      }
    }
    Zotero.write("}");
  }
  return Citation_graph_exports;
})();
var { Translator, doExport } = Citationgraph__Translator__doExport;
