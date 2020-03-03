import firebase from "firebase/app";

const deleteSubscription = subscription => {
  return firebase
    .firestore()
    .collection("subscriptions")
    .doc(subscription.id)
    .delete()
    .catch(error => {
      alert(`Whoops, couldn't delete the subscription: ${error.message}`);
    });
};

export default deleteSubscription;
