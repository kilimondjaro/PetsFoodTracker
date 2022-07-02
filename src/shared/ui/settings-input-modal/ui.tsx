import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { Button } from 'src/shared/ui/button';
import { Text } from 'src/shared/ui/text';
import { TextInput } from 'src/shared/ui/text-input';

import type { SettingsInputModalProps, SettingsInputType } from './types';

export const SettingsInputModal = <T extends SettingsInputType>({
  initialValue,
  title,
  keyboardType,
  closeModal,
  onSave,
}: SettingsInputModalProps<T>) => {
  const [value, setValue] = React.useState<T>(initialValue);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding"
      keyboardVerticalOffset={50}
    >
      <Pressable style={styles.pressable} onPress={() => Keyboard.dismiss()}>
        <Box flex={1} paddingVertical="xl" justifyContent="space-between">
          <Box>
            <Text marginBottom="m" variant="title1">
              {title}
            </Text>
            <TextInput
              placeholder={`Input ${title.toLowerCase()}`}
              value={value ? value.toString() : ''}
              keyboardType={keyboardType}
              onChangeText={(text) => setValue(text as T)}
            />
          </Box>
          <Box justifyContent="center">
            <Button
              title={t('settingsInputModal.save')}
              isDisabled={value === null}
              onPress={() => {
                onSave(value);
                closeModal();
              }}
            />
          </Box>
        </Box>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
