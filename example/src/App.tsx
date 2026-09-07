import React from 'react';
import { View } from 'react-native';

// Import only the components you want to test
import { Button, Text, TextField, Select, Badge } from '../../src/components'; // Adjust the import path as needed

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View className="p-4 space-y-8" style={{ alignItems: 'flex-start' }}>
        <Text variant="title" style={{ marginVertical: 10 }}>
          FieldOps UI Demo
        </Text>

        <TextField
          label="Username"
          placeholder="Enter your name"
          helperText="This field is required"
          style={{ marginVertical: 10 }}
        />

        <Select
          options={[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' },
          ]}
          placeholder="Choose an option"
          style={{ marginVertical: 10 }}
          onChange={(val) => console.log('Selected:', val)}
        />

        <Badge
          status="in-progress"
          label="Working…"
          style={{ marginVertical: 10 }}
        />

        <Button label="Save" style={{ marginVertical: 10 }} />
      </View>
    </View>
  );
}
