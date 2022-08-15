import {
  BackdropBlur,
  Canvas,
  Fill,
  Group,
  Path,
  translate,
} from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import type { BackgroundProps } from './types';

export const Background = ({}: BackgroundProps) => {
  return (
    <Canvas style={styles.canvas}>
      <Fill color="white" />
      <Group
        transform={translate({
          x: 30,
          y: Dimensions.get('screen').height / 2 - 100,
        })}
      >
        <Path
          color="black"
          path="m306.483 226.364c-1.281-9.823-10.756-25.076-18.44-27.661-7.682-2.585-30.219-10.599-31.756-14.218-1.536-3.62-6.146-14.994-5.378-18.354.769-3.361 6.915-20.164 5.891-35.417-1.025-15.253-4.354-27.661-2.817-31.0213 1.536-3.361 14.213-16.535 14.213-19.6472 0-4.5242 1.28-5.9456 1.341-8.4894.034-1.464-2.719-6.446-4.655-7.8973-1.936-1.4508-11.411-1.9683-13.204-3.2609-1.793-1.2921-2.066-3.9133-4.385-4.4358-1.901-.4285-3.811.3002-5.603.0415-1.793-.2588-3.329-1.2927-4.61-1.0339-1.28.2582-1.985-.1941-2.753-2.5212-.769-2.3265-2.305-9.5642-3.269-9.7577-1.013-.2024-3.709 4.3937-4.35 9.5643-.64 5.1699-.853 6.3431-3.179 6.4675-2.327.1244-14.811-13.4162-17.916-12.9147-3.106.5015-4.771 4.8958-1.825 19.3729 2.945 14.4766 4.737 20.4223 3.585 25.8516-1.153 5.4287-1.793 14.8646-1.537 19.0006s.256 7.885-1.024 9.048c-1.281 1.163-57.962 19.275-81.695 57.907-20.488 33.348-12.805 74.451-14.598 77.037-2.408 3.473-12.5334 8.199-20.4878 8.272-30.8899.282-45.7894-5.625-54.4509-16.263-15.3661-18.871-9.2196-41.879-4.3538-51.961 2.6159-5.42 4.7306-11.838 4.6096-14.218-.1276-2.521-5.143-5.201-9.2197-1.292-5.1216 4.911-10.389 15.915-12.5486 31.797-1.7927 13.183-2.61095 43.892 28.8415 60.468 16.232 8.555 42.256 7.44 67.6097 7.44h131.89s4.194 0 4.194-3.562c0-2.65-14.438-26.109-17.254-33.607-2.818-7.497-5.123-16.803-4.611-19.388.513-2.585 4.56-17.431 7.53-19.573 2.971-2.142 9.885 4.579 23.458 7.164 13.574 2.585 28.684 5.17 31.244 7.239 2.561 2.068 4.129 6.546 4.242 9.348.112 2.802 1.649 11.591 6.77 12.367 5.123.775 11.781-2.068 10.501-11.892zm-88.866 41.104c-.641 1.293-3.586.129-5.506-.646-1.921-.777-4.482.646-7.555.775-3.073.13-8.964-6.075-11.082-7.012-2.119-.936-5.181.162-6.645 0-1.465-.16-1.532-1.948-1.532-1.948 4.303-6.245 7.094-18.313 7.606-22.449.513-4.137-2.258-7.704-2.258-7.704s5.587-8.971 6.484-10.651c.896-1.681 3.713-1.809 4.866-1.034 1.152.776 2.817 17.191 4.738 25.464 1.92 8.272 9.86 21.715 10.884 25.205z"
        />
      </Group>
      <BackdropBlur blur={7} />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});