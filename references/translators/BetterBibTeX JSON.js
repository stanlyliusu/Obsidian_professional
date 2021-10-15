{
	"translatorID": "36a3b0b5-bad0-4a04-b79b-441c7cef77db",
	"label": "BetterBibTeX JSON",
	"description": "exports and imports references in BetterBibTeX debug format. Mostly for BBT-internal use",
	"creator": "Emiliano Heyns",
	"target": "json",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"configOptions": {
		"async": true,
		"getCollections": true,
		"hash": "35bbb1f6c1da3c21917606c4aaea7fdc9df67b01c7a640a786a45349f0ef4d4d"
	},
	"displayOptions": {
		"exportNotes": true,
		"exportFileData": false,
		"keepUpdated": false
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 49,
	"inRepository": false,
	"lastUpdated": "2021-10-09"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors"}
var global = Function("return this")();
if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {"translatorID":"36a3b0b5-bad0-4a04-b79b-441c7cef77db","label":"BetterBibTeX JSON","description":"exports and imports references in BetterBibTeX debug format. Mostly for BBT-internal use","creator":"Emiliano Heyns","target":"json","minVersion":"4.0.27","maxVersion":"","configOptions":{"async":true,"getCollections":true},"displayOptions":{"exportNotes":true,"exportFileData":false,"keepUpdated":false},"translatorType":3,"browserSupport":"gcsv","priority":49,"inRepository":false};
var BetterBibTeXJSON__Translator__detectImport__doImport__doExport = (() => {
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
      for (let key2 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key2) && key2 !== "default")
          __defProp(target, key2, { get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable });
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
        function stringifyFullFn(key2, parent, stack, replacer, spacer, indentation) {
          let value = parent[key2];
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key2);
          }
          value = replacer.call(parent, key2, value);
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
              for (const key3 of keys) {
                const tmp = stringifyFullFn(key3, value, stack, replacer, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key3)}":${whitespace}${tmp}`;
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
        function stringifyFullArr(key2, value, stack, replacer, spacer, indentation) {
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key2);
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
              for (const key3 of replacer) {
                if (typeof key3 === "string" || typeof key3 === "number") {
                  const tmp = stringifyFullArr(key3, value[key3], stack, replacer, spacer, indentation);
                  if (tmp !== void 0) {
                    res += `${separator}"${strEscape(key3)}":${whitespace}${tmp}`;
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
        function stringifyIndent(key2, value, stack, spacer, indentation) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key2);
                if (typeof value !== "object") {
                  return stringifyIndent(key2, value, stack, spacer, indentation);
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
              for (const key3 of keys) {
                const tmp = stringifyIndent(key3, value[key3], stack, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key3)}": ${tmp}`;
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
        function stringifySimple(key2, value, stack) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key2);
                if (typeof value !== "object") {
                  return stringifySimple(key2, value, stack);
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
              for (const key3 of keys) {
                const tmp = stringifySimple(key3, value[key3], stack);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key3)}":${tmp}`;
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

  // gen/version.js
  var require_version = __commonJS({
    "gen/version.js"(exports, module) {
      module.exports = "5.5.4";
    }
  });

  // translators/BetterBibTeX JSON.ts
  var BetterBibTeX_JSON_exports = {};
  __export(BetterBibTeX_JSON_exports, {
    Translator: () => Translator,
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
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
      for (const key2 in this.options) {
        if (typeof this.options[key2] === "boolean") {
          this.options[key2] = !!Zotero.getOption(key2);
        } else {
          this.options[key2] = Zotero.getOption(key2);
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
      const key2 = (collection.primary ? collection.primary : collection).key;
      const children = collection.children || collection.descendents || [];
      const collections = children.filter((coll) => coll.type === "collection");
      this.collections[key2] = {
        key: key2,
        parent,
        name: collection.name,
        collections: collections.map((coll) => coll.key),
        items: children.filter((coll) => coll.type === "item").map((item) => item.id)
      };
      for (collection of collections) {
        this.registerCollection(collection, key2);
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
        collections: collection.collections.map((key2) => this.nestedCollection(this.collections[key2])).filter((coll) => coll)
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

  // gen/items/items.ts
  var jurism = client === "jurism";
  var zotero = !jurism;
  var valid = {
    type: {
      artwork: true,
      attachment: true,
      audioRecording: true,
      bill: true,
      blogPost: true,
      book: true,
      bookSection: true,
      case: true,
      classic: jurism,
      computerProgram: true,
      conferencePaper: true,
      dictionaryEntry: true,
      document: true,
      email: true,
      encyclopediaArticle: true,
      film: true,
      forumPost: true,
      gazette: jurism,
      hearing: true,
      instantMessage: true,
      interview: true,
      journalArticle: true,
      legalCommentary: jurism,
      letter: true,
      magazineArticle: true,
      manuscript: true,
      map: true,
      newspaperArticle: true,
      note: true,
      patent: true,
      podcast: true,
      presentation: true,
      radioBroadcast: true,
      regulation: jurism,
      report: true,
      standard: jurism,
      statute: true,
      thesis: true,
      treaty: jurism,
      tvBroadcast: true,
      videoRecording: true,
      webpage: true
    },
    field: {
      artwork: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        artworkMedium: true,
        artworkSize: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        publicationTitle: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        websiteTitle: jurism
      },
      attachment: {
        accessDate: true,
        dateAdded: true,
        dateModified: true,
        id: true,
        itemID: true,
        itemType: true,
        tags: true,
        title: true,
        url: true
      },
      audioRecording: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        album: jurism,
        archive: true,
        archiveLocation: true,
        attachments: true,
        audioRecordingFormat: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: jurism,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        label: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        opus: jurism,
        originalDate: jurism,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        release: jurism,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      bill: {
        abstractNote: true,
        accessDate: true,
        archiveLocation: jurism,
        assemblyNumber: jurism,
        attachments: true,
        billNumber: true,
        code: true,
        codePages: true,
        codeVolume: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legislativeBody: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        publicationTitle: jurism,
        reporter: jurism,
        resolutionLabel: jurism,
        rights: true,
        section: true,
        seeAlso: true,
        seriesNumber: jurism,
        session: true,
        sessionType: jurism,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true,
        volume: true
      },
      blogPost: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        blogTitle: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        websiteType: true
      },
      book: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: jurism,
        multi: true,
        notes: true,
        numPages: true,
        numberOfVolumes: true,
        place: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true,
        volumeTitle: jurism
      },
      bookSection: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        bookAbbreviation: jurism,
        bookTitle: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true,
        volumeTitle: jurism
      },
      case: {
        DOI: jurism,
        abstractNote: true,
        accessDate: true,
        adminFlag: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        caseName: true,
        court: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateDecided: true,
        dateModified: true,
        division: jurism,
        docketNumber: true,
        documentName: jurism,
        documentNumber: jurism,
        extra: true,
        filingDate: jurism,
        firstPage: true,
        history: true,
        id: true,
        issue: jurism,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        place: jurism,
        publicationDate: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        reign: jurism,
        reporter: true,
        reporterVolume: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        supplementName: jurism,
        tags: true,
        title: true,
        url: true,
        volume: true,
        yearAsVolume: jurism
      },
      classic: {
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        language: jurism,
        libraryCatalog: jurism,
        manuscriptType: jurism,
        multi: true,
        notes: true,
        numPages: jurism,
        place: jurism,
        rights: jurism,
        seeAlso: true,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        type: jurism,
        url: jurism,
        volume: jurism
      },
      computerProgram: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        company: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        place: true,
        programmingLanguage: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        system: true,
        tags: true,
        title: true,
        url: true,
        versionNumber: true
      },
      conferencePaper: {
        DOI: true,
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        conferenceDate: jurism,
        conferenceName: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        institution: jurism,
        issue: jurism,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: true,
        proceedingsTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      dictionaryEntry: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        dictionaryTitle: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      document: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        versionNumber: jurism
      },
      email: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        subject: true,
        tags: true,
        title: true,
        url: true
      },
      encyclopediaArticle: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        encyclopediaTitle: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        series: true,
        seriesNumber: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      film: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        distributor: true,
        extra: true,
        genre: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        videoRecordingFormat: true
      },
      forumPost: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        forumTitle: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        postType: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      gazette: {
        abstractNote: jurism,
        accessDate: jurism,
        attachments: true,
        code: jurism,
        codeNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateEnacted: jurism,
        dateModified: true,
        extra: jurism,
        history: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        multi: true,
        nameOfAct: jurism,
        notes: true,
        number: jurism,
        pages: jurism,
        publicLawNumber: jurism,
        publicationDate: jurism,
        publisher: jurism,
        regnalYear: jurism,
        reign: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        session: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism
      },
      hearing: {
        abstractNote: true,
        accessDate: true,
        archiveLocation: jurism,
        assemblyNumber: jurism,
        attachments: true,
        committee: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        documentNumber: true,
        extra: true,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legislativeBody: true,
        meetingName: jurism,
        meetingNumber: jurism,
        multi: true,
        notes: true,
        number: zotero,
        numberOfVolumes: true,
        pages: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        reporter: jurism,
        resolutionLabel: jurism,
        rights: true,
        seeAlso: true,
        seriesNumber: jurism,
        session: true,
        sessionType: jurism,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true,
        volume: jurism
      },
      instantMessage: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      interview: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        interviewMedium: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        place: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      journalArticle: {
        DOI: true,
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        issue: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: jurism,
        publicationTitle: true,
        publisher: jurism,
        rights: true,
        seeAlso: true,
        series: true,
        seriesText: true,
        seriesTitle: true,
        shortTitle: true,
        status: jurism,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      legalCommentary: {
        ISBN: jurism,
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        bookAbbreviation: jurism,
        bookTitle: jurism,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        edition: jurism,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        journalAbbreviation: jurism,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        numberOfVolumes: jurism,
        pages: jurism,
        place: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        rights: jurism,
        seeAlso: true,
        series: jurism,
        seriesNumber: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism,
        versionNumber: jurism,
        volume: jurism,
        volumeTitle: jurism
      },
      letter: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        letterType: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      magazineArticle: {
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        issue: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        pages: true,
        place: jurism,
        publicationTitle: true,
        publisher: jurism,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        volume: true
      },
      manuscript: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        manuscriptType: true,
        multi: true,
        notes: true,
        numPages: true,
        place: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      map: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        mapType: true,
        multi: true,
        notes: true,
        place: true,
        publisher: true,
        rights: true,
        scale: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      newspaperArticle: {
        ISSN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        court: jurism,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        edition: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        multi: true,
        newsCaseDate: jurism,
        notes: true,
        pages: true,
        place: true,
        publicationTitle: true,
        rights: true,
        section: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      note: {
        dateAdded: true,
        dateModified: true,
        id: true,
        itemID: true,
        itemType: true,
        note: true,
        tags: true
      },
      patent: {
        abstractNote: true,
        accessDate: true,
        applicationNumber: true,
        assignee: true,
        attachments: true,
        country: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        filingDate: true,
        genre: jurism,
        id: true,
        issueDate: true,
        issuingAuthority: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        legalStatus: true,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        patentNumber: true,
        place: true,
        priorityDate: jurism,
        priorityNumbers: true,
        publicationDate: jurism,
        publicationNumber: jurism,
        references: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: jurism,
        url: true
      },
      podcast: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        audioFileType: true,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        medium: true,
        multi: true,
        notes: true,
        number: true,
        publisher: jurism,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      presentation: {
        abstractNote: true,
        accessDate: true,
        archive: jurism,
        archiveCollection: jurism,
        archiveLocation: jurism,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        meetingName: true,
        multi: true,
        notes: true,
        place: true,
        presentationType: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      radioBroadcast: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        audioRecordingFormat: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        network: true,
        notes: true,
        number: true,
        place: true,
        programTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      regulation: {
        abstractNote: jurism,
        accessDate: jurism,
        attachments: true,
        code: jurism,
        codeNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateEnacted: jurism,
        dateModified: true,
        extra: jurism,
        gazetteFlag: jurism,
        history: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        legislativeBody: jurism,
        multi: true,
        nameOfAct: jurism,
        notes: true,
        number: jurism,
        pages: jurism,
        publicLawNumber: jurism,
        publicationDate: jurism,
        publisher: jurism,
        regulationType: jurism,
        regulatoryBody: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        session: jurism,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        type: jurism,
        url: jurism
      },
      report: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        assemblyNumber: jurism,
        attachments: true,
        bookTitle: jurism,
        callNumber: true,
        committee: jurism,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        institution: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        libraryCatalog: true,
        medium: jurism,
        multi: true,
        notes: true,
        number: true,
        pages: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        reportNumber: true,
        reportType: true,
        rights: true,
        seeAlso: true,
        seriesNumber: jurism,
        seriesTitle: true,
        shortTitle: true,
        status: jurism,
        tags: true,
        title: true,
        type: true,
        url: true
      },
      standard: {
        abstractNote: jurism,
        accessDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        number: jurism,
        publisher: jurism,
        rights: jurism,
        seeAlso: true,
        shortTitle: jurism,
        tags: true,
        title: jurism,
        url: jurism,
        versionNumber: jurism
      },
      statute: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        code: true,
        codeNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateAmended: jurism,
        dateEnacted: true,
        dateModified: true,
        extra: true,
        gazetteFlag: jurism,
        history: true,
        id: true,
        itemID: true,
        itemType: true,
        jurisdiction: jurism,
        language: true,
        multi: true,
        nameOfAct: true,
        notes: true,
        number: true,
        originalDate: jurism,
        pages: true,
        publicLawNumber: true,
        publicationDate: jurism,
        publisher: jurism,
        regnalYear: jurism,
        reign: jurism,
        rights: true,
        section: true,
        seeAlso: true,
        session: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true
      },
      thesis: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        multi: true,
        notes: true,
        numPages: true,
        place: true,
        publisher: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        thesisType: true,
        title: true,
        type: true,
        university: true,
        url: true
      },
      treaty: {
        abstractNote: jurism,
        accessDate: jurism,
        adoptionDate: jurism,
        archive: jurism,
        archiveLocation: jurism,
        attachments: true,
        callNumber: jurism,
        creators: true,
        date: jurism,
        dateAdded: true,
        dateModified: true,
        extra: jurism,
        id: true,
        itemID: true,
        itemType: true,
        language: jurism,
        libraryCatalog: jurism,
        multi: true,
        notes: true,
        number: jurism,
        openingDate: jurism,
        pages: jurism,
        parentTreaty: jurism,
        publicationTitle: jurism,
        publisher: jurism,
        reporter: jurism,
        rights: jurism,
        section: jurism,
        seeAlso: true,
        shortTitle: jurism,
        signingDate: jurism,
        supplementName: jurism,
        tags: true,
        title: jurism,
        treatyNumber: jurism,
        url: jurism,
        versionNumber: jurism,
        volume: jurism
      },
      tvBroadcast: {
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        episodeNumber: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        network: true,
        notes: true,
        number: true,
        place: true,
        programTitle: true,
        publicationTitle: true,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        url: true,
        videoRecordingFormat: true
      },
      videoRecording: {
        ISBN: true,
        abstractNote: true,
        accessDate: true,
        archive: true,
        archiveLocation: true,
        attachments: true,
        callNumber: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        libraryCatalog: true,
        medium: true,
        multi: true,
        notes: true,
        numberOfVolumes: true,
        place: true,
        publicationTitle: jurism,
        publisher: true,
        rights: true,
        runningTime: true,
        seeAlso: true,
        seriesTitle: true,
        shortTitle: true,
        studio: true,
        tags: true,
        title: true,
        url: true,
        videoRecordingFormat: true,
        volume: true,
        websiteTitle: jurism
      },
      webpage: {
        abstractNote: true,
        accessDate: true,
        attachments: true,
        creators: true,
        date: true,
        dateAdded: true,
        dateModified: true,
        extra: true,
        id: true,
        itemID: true,
        itemType: true,
        language: true,
        multi: true,
        notes: true,
        publicationTitle: true,
        rights: true,
        seeAlso: true,
        shortTitle: true,
        tags: true,
        title: true,
        type: true,
        url: true,
        websiteTitle: true,
        websiteType: true
      }
    }
  };
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (zotero) {
      if (item.documentNumber)
        item.number = item.documentNumber;
      if (scrub) {
        delete item.documentNumber;
      }
      if (item.institution)
        item.publisher = item.institution;
      if (scrub) {
        delete item.institution;
      }
    }
    if (jurism) {
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
    }
  }
  function simplifyForExport(item, { dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }
  function simplifyForImport(item) {
    unalias(item, { scrub: true });
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.name) {
          creator.lastName = creator.lastName || creator.name;
          creator.fieldMode = 1;
          delete creator.firstName;
          delete creator.name;
        }
        if (!jurism)
          delete creator.multi;
      }
    }
    if (!jurism)
      delete item.multi;
    return item;
  }

  // translators/lib/normalize.ts
  function rjust(str, width, padding) {
    if (typeof str === "number")
      str = `${str}`;
    padding = (padding || " ")[0];
    return str.length < width ? padding.repeat(width - str.length) + str : str;
  }
  function key(item) {
    var _a, _b, _c, _d;
    return [item.itemType, item.citationKey || "", item.title || "", ((_b = (_a = item.creators) == null ? void 0 : _a[0]) == null ? void 0 : _b.lastName) || ((_d = (_c = item.creators) == null ? void 0 : _c[0]) == null ? void 0 : _d.name) || ""].join("	").toLowerCase();
  }
  function strip(obj) {
    if (Array.isArray(obj)) {
      obj = obj.map(strip).filter((e) => e);
      return obj.length ? obj : void 0;
    }
    if (typeof obj === "object") {
      let keep = false;
      for (let [k, v] of Object.entries(obj)) {
        v = strip(v);
        if (typeof v === "undefined") {
          delete obj[k];
        } else {
          obj[k] = v;
          keep = true;
        }
      }
      return keep ? obj : void 0;
    }
    if (typeof obj === "string" && !obj)
      return void 0;
    if (obj === null)
      return void 0;
    return obj;
  }
  function normalize(library, sort = true) {
    var _a, _b, _c, _d, _e;
    if (sort)
      library.items.sort((a, b) => key(a).localeCompare(key(b)));
    for (const item of library.items) {
      delete item.citekey;
      delete item.autoJournalAbbreviation;
      delete item.libraryID;
      delete item.key;
      delete item.itemKey;
      delete item.version;
      delete item.uniqueFields;
      delete item.collections;
      if ((_a = item.notes) == null ? void 0 : _a.length) {
        item.notes = item.notes.map((note) => typeof note === "string" ? note : note.note).sort();
      } else {
        delete item.notes;
      }
      if ((_b = item.tags) == null ? void 0 : _b.length) {
        item.tags = item.tags.map((tag) => typeof tag === "string" ? { tag } : tag).sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        delete item.tags;
      }
      if ((_c = item.attachments) == null ? void 0 : _c.length) {
        for (const att of item.attachments) {
          att.contentType = att.contentType || att.mimeType;
          delete att.mimeType;
          for (const prop of ["localPath", "itemID", "charset", "dateAdded", "parentItem", "dateModified", "version", "relations", "id"]) {
            delete att[prop];
          }
        }
      } else {
        delete item.attachments;
      }
      if ((_d = item.creators) == null ? void 0 : _d.length) {
        for (const creator of item.creators) {
          if (!creator.fieldMode)
            delete creator.fieldMode;
        }
      } else {
        delete item.creators;
      }
      if (item.extra && typeof item.extra !== "string")
        item.extra = item.extra.join("\n");
      strip(item);
      if ((_e = item.extra) == null ? void 0 : _e.length) {
        item.extra = item.extra.split("\n");
      } else {
        delete item.extra;
      }
    }
    if (library.preferences) {
      delete library.preferences.client;
      delete library.preferences.platform;
      delete library.preferences.newTranslatorsAskRestart;
      delete library.preferences.testing;
    }
    library.items.sort((a, b) => stringify({ ...a, itemID: 0 }).localeCompare(stringify({ ...b, itemID: 0 })));
    const itemIDs = library.items.reduce((acc, item, i) => {
      item.itemID = acc[item.itemID] = i + 1;
      return acc;
    }, {});
    if (library.collections && Object.keys(library.collections).length) {
      const collectionOrder = Object.values(library.collections).sort((a, b) => stringify({ ...a, key: "", parent: "" }).localeCompare(stringify({ ...b, key: "", parent: "" })));
      const collectionKeys = collectionOrder.reduce((acc, coll, i) => {
        coll.key = acc[coll.key] = `coll:${rjust(i, 5, "0")}`;
        return acc;
      }, {});
      library.collections = collectionOrder.reduce((acc, coll) => {
        if (!(coll.parent = collectionKeys[coll.parent]))
          delete coll.parent;
        coll.items = coll.items.map((itemID) => itemIDs[itemID]).filter((itemID) => typeof itemID === "number").sort();
        coll.collections = coll.collections.map((collectionKey) => collectionKeys[collectionKey]).filter((collectionKey) => collectionKey).sort();
        acc[coll.key] = coll;
        return acc;
      }, {});
    } else {
      delete library.collections;
    }
  }

  // translators/BetterBibTeX JSON.ts
  var version = require_version();
  var chunkSize = 1048576;
  function detectImport() {
    let str;
    let json = "";
    while ((str = Zotero.read(chunkSize)) !== false) {
      json += str;
      if (json[0] !== "{")
        return false;
    }
    let data;
    try {
      data = JSON.parse(json);
    } catch (err) {
      return false;
    }
    if (!data.config || data.config.id !== Translator.header.translatorID)
      return false;
    return true;
  }
  async function doImport() {
    Translator.init("import");
    let str;
    let json = "";
    while ((str = Zotero.read(chunkSize)) !== false) {
      json += str;
    }
    const data = JSON.parse(json);
    if (!data.items || !data.items.length)
      return;
    const items = new Set();
    for (const source of data.items) {
      simplifyForImport(source);
      delete source.relations;
      delete source.citekey;
      delete source.citationKey;
      delete source.uri;
      delete source.key;
      delete source.version;
      delete source.libraryID;
      delete source.collections;
      delete source.autoJournalAbbreviation;
      if (source.creators) {
        for (const creator of source.creators) {
          if (!creator.name) {
            creator.lastName = creator.lastName || "";
            creator.firstName = creator.firstName || "";
          }
        }
      }
      if (!valid.type[source.itemType])
        throw new Error(`unexpected item type '${source.itemType}'`);
      const validFields = valid.field[source.itemType];
      for (const field of Object.keys(source)) {
        const valid2 = validFields[field];
        if (valid2)
          continue;
        const msg = `${valid2}: unexpected ${source.itemType}.${field} for ${Translator.isZotero ? "zotero" : "juris-m"} in ${JSON.stringify(source)} / ${JSON.stringify(validFields)}`;
        if (valid2 === false) {
          log.error(msg);
        } else {
          throw new Error(msg);
        }
      }
      if (Array.isArray(source.extra))
        source.extra = source.extra.join("\n");
      const item = new Zotero.Item();
      Object.assign(item, source);
      item.extra = `BBT${item.extra || ""}`;
      for (const att of item.attachments || []) {
        if (att.url)
          delete att.path;
        delete att.relations;
        delete att.uri;
      }
      await item.complete();
      items.add(source.itemID);
      Zotero.setProgress(items.size / data.items.length * 100);
    }
    Zotero.setProgress(100);
    const collections = Object.values(data.collections || {});
    for (const collection of collections) {
      collection.zoteroCollection = new Zotero.Collection();
      collection.zoteroCollection.type = "collection";
      collection.zoteroCollection.name = collection.name;
      collection.zoteroCollection.children = collection.items.filter((id) => {
        if (items.has(id))
          return true;
        log.error(`Collection ${collection.key} has non-existent item ${id}`);
        return false;
      }).map((id) => ({ type: "item", id }));
    }
    for (const collection of collections) {
      if (collection.parent && data.collections[collection.parent]) {
        data.collections[collection.parent].zoteroCollection.children.push(collection.zoteroCollection);
      } else {
        if (collection.parent)
          log.debug(`Collection ${collection.key} has non-existent parent ${collection.parent}`);
        collection.parent = false;
      }
    }
    for (const collection of collections) {
      if (collection.parent)
        continue;
      collection.zoteroCollection.complete();
    }
  }
  function doExport() {
    Translator.init("export");
    let item;
    const data = {
      config: {
        id: Translator.header.translatorID,
        label: Translator.header.label,
        preferences: Translator.preferences,
        options: Translator.options,
        localeDateOrder: Zotero.BetterBibTeX.getLocaleDateOrder()
      },
      version: {
        zotero: Zotero.Utilities.getVersion(),
        bbt: version
      },
      collections: Translator.collections,
      items: []
    };
    const validAttachmentFields = new Set(["relations", "uri", "itemType", "title", "path", "tags", "dateAdded", "dateModified", "seeAlso", "mimeType"]);
    while (item = Zotero.nextItem()) {
      if (Translator.options.dropAttachments && item.itemType === "attachment")
        continue;
      if (!Translator.preferences.testing) {
        const [, kind, lib, key2] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
        item.select = kind === "users" ? `zotero://select/library/items/${key2}` : `zotero://select/groups/${lib}/items/${key2}`;
      }
      delete item.collections;
      simplifyForExport(item, { dropAttachments: Translator.options.dropAttachments });
      item.relations = item.relations ? item.relations["dc:relation"] || [] : [];
      for (const att of item.attachments || []) {
        if (Translator.options.exportFileData && att.saveFile && att.defaultPath) {
          att.saveFile(att.defaultPath, true);
          att.path = att.defaultPath;
        } else if (att.localPath) {
          att.path = att.localPath;
        }
        if (!Translator.preferences.testing) {
          const [, kind, lib, key2] = att.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
          att.select = kind === "users" ? `zotero://select/library/items/${key2}` : `zotero://select/groups/${lib}/items/${key2}`;
        }
        if (!att.path)
          continue;
        att.relations = att.relations ? att.relations["dc:relation"] || [] : [];
        for (const field of Object.keys(att)) {
          if (!validAttachmentFields.has(field)) {
            delete att[field];
          }
        }
      }
      data.items.push(item);
    }
    if (Translator.preferences.testing)
      normalize(data);
    Zotero.write(stringify(data, null, "  "));
  }
  return BetterBibTeX_JSON_exports;
})();
var { Translator, detectImport, doImport, doExport } = BetterBibTeXJSON__Translator__detectImport__doImport__doExport;
