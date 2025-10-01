import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function absoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? '';
  return `${base}${path}`;
}

// Minimal local types to avoid depending on 'estree' package
type ESTExpression = unknown;
type ESTProgram = { type: 'Program'; body: any[] };

export function createElement(name: string, attributes: object[], children?: unknown): object {
  const element: Record<string, unknown> = {
    type: 'mdxJsxFlowElement',
    name,
    attributes
  };

  if (children) element.children = children;

  return element;
}

export function expressionToAttribute(key: string, value: ESTExpression): object {
  return {
    type: 'mdxJsxAttribute',
    name: key,
    value: {
      type: 'mdxJsxAttributeValueExpression',
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: value
            }
          ]
        } as ESTProgram
      }
    }
  };
}