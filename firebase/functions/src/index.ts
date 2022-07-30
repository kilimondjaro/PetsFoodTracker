import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import * as functions from 'firebase-functions';

admin.initializeApp();
const firestore = getFirestore();

export const dailyPetFoodReset = functions
  .region('europe-central2')
  .pubsub.schedule('every day 02:00')
  // TODO: Support timezone based on user's timezone
  .timeZone('Europe/Madrid')
  .onRun(async () => {
    const docs = await firestore.collection('pets').get();

    const batch = firestore.batch();

    docs.forEach((curSnapshot) => {
      const data = curSnapshot.data();

      batch.update(curSnapshot.ref, {
        currentDailyFoodAmountLeft: data.dailyFoodAmount,
        currentDailyFoodPortionsGiven: 0,
      });
    });

    await batch.commit();
    functions.logger.info('Daily food amount reset', { structuredData: true });
  });
