import admin from '../firebase/firebase';

export const sendNotification = async (deviceToken: string, title: string, body: string) => {
  const message = {
    token: deviceToken,
    notification: {
      title,
      body,
    },
    android: {
      priority: 'high' as const,
      notification: {
        channelId: 'default',
      },
    },
    apns: {
      payload: {
        aps: {
          alert: {
            title,
            body,
          },
          sound: 'default',
        },
      },
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('✅ Notification sent:', response);
    return response;
  } catch (error) {
    console.error('❌ Error sending notification:', error);
    throw error;
  }
};
