import type { BorderProps } from '@shopify/restyle';
import type React from 'react';
import type { Theme } from 'src/shared/ui/theme/types';

export type ModalLayoutProps = {
  children: React.ReactNode;
} & BorderProps<Theme>;
