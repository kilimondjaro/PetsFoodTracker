import React from 'react';
import { t } from 'src/shared/lib/translate';
import { Box } from 'src/shared/ui/box';
import { ModalLayout } from 'src/shared/ui/modal-layout';
import { ModalWrapper } from 'src/shared/ui/modal-wrapper';
import type {
  SettingsInputModalProps,
  SettingsInputType,
} from 'src/shared/ui/settings-input-modal';
import { SettingsInputModal } from 'src/shared/ui/settings-input-modal';
import { SettingsRow } from 'src/shared/ui/settings-row/ui';
import { Text } from 'src/shared/ui/text';

export const PetProfileScreen = () => {
  const [petName, setPetName] = React.useState<string | null>(null);
  const [dailyAmount, setDailyAmount] = React.useState<number | null>(null);
  const [timesPerDay, setTimesPerDay] = React.useState<number | null>(null);

  return (
    <ModalLayout>
      <Box flex={1} paddingVertical="l" flexDirection="column">
        <Text marginBottom="l" variant="title1" color="primaryGradient1">
          {t('petProfileScreen.title')}
        </Text>
        <PetProfileSettingsRow
          title={t('petProfileScreen.name')}
          value={petName}
          onSave={setPetName}
        />
        <PetProfileSettingsRow
          title={t('petProfileScreen.dailyAmount')}
          value={dailyAmount}
          keyboardType="number-pad"
          onSave={setDailyAmount}
        />
        <PetProfileSettingsRow
          title={t('petProfileScreen.timesPerDay')}
          value={timesPerDay}
          keyboardType="number-pad"
          onSave={setTimesPerDay}
        />
      </Box>
    </ModalLayout>
  );
};

type PetProfileSettingsRowProps<T extends SettingsInputType> = {
  value: T;
} & Pick<SettingsInputModalProps<T>, 'title' | 'keyboardType' | 'onSave'>;

const PetProfileSettingsRow = <T extends SettingsInputType>({
  title,
  value,
  keyboardType,
  onSave,
}: PetProfileSettingsRowProps<T>) => (
  <ModalWrapper
    renderModalTrigger={({ openModal }) => (
      <SettingsRow name={title} value={value} onPress={openModal} />
    )}
    renderModalContent={({ closeModal }) => (
      <SettingsInputModal
        initialValue={value}
        title={title}
        keyboardType={keyboardType}
        closeModal={closeModal}
        onSave={onSave}
      />
    )}
  />
);
