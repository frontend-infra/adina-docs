import { css } from '@emotion/css'

export default css`
  &.hljs {
    border: 1px solid #d1d9e0;
    color: #24292e;
    background-color: #fff;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    color: #d73a49;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    color: #953800;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-variable {
    color: #005cc5;
  }

  .hljs-meta .hljs-string,
  .hljs-regexp,
  .hljs-string {
    color: #032f62;
  }

  .hljs-built_in,
  .hljs-symbol {
    color: #e36209;
  }

  .hljs-code,
  .hljs-comment,
  .hljs-formula {
    color: #6a737d;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-pseudo,
  .hljs-selector-tag {
    color: #22863a;
  }

  .hljs-subst {
    color: #24292e;
  }

  .hljs-section {
    color: #005cc5;
    font-weight: 700;
  }

  .hljs-bullet {
    color: #735c0f;
  }

  .hljs-emphasis {
    color: #24292e;
    font-style: italic;
  }

  .hljs-strong {
    color: #24292e;
    font-weight: 700;
  }

  .hljs-addition {
    color: #22863a;
    background-color: #f0fff4;
  }

  .hljs-deletion {
    color: #b31d28;
    background-color: #ffeef0;
  }

  [data-theme='dark'] & {
    border-color: #3d444d;
    color: #c9d1d9;
    background-color: #0d1117;

    .hljs-doctag,
    .hljs-keyword,
    .hljs-meta .hljs-keyword,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-type,
    .hljs-variable.language_ {
      color: #ff7b72;
    }

    .hljs-title,
    .hljs-title.class_,
    .hljs-title.class_.inherited__,
    .hljs-title.function_ {
      color: #ffa657;
    }

    .hljs-attr,
    .hljs-attribute,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-operator,
    .hljs-selector-attr,
    .hljs-selector-class,
    .hljs-selector-id,
    .hljs-variable {
      color: #79c0ff;
    }

    .hljs-meta .hljs-string,
    .hljs-regexp,
    .hljs-string {
      color: #a5d6ff;
    }

    .hljs-built_in,
    .hljs-symbol {
      color: #ffa657;
    }

    .hljs-code,
    .hljs-comment,
    .hljs-formula {
      color: #8b949e;
    }

    .hljs-name,
    .hljs-quote,
    .hljs-selector-pseudo,
    .hljs-selector-tag {
      color: #7ee787;
    }

    .hljs-subst {
      color: #c9d1d9;
    }

    .hljs-section {
      color: #1f6feb;
      font-weight: 700;
    }

    .hljs-bullet {
      color: #f2cc60;
    }

    .hljs-emphasis {
      color: #c9d1d9;
      font-style: italic;
    }

    .hljs-strong {
      color: #c9d1d9;
      font-weight: 700;
    }

    .hljs-addition {
      color: #aff5b4;
      background-color: #033a16;
    }

    .hljs-deletion {
      color: #ffdcd7;
      background-color: #67060c;
    }
  }
`
