let Social = {
  share: function (friendName) {
    console.log(`Share ${this.title} with ${friendName}`);
  },
  like: function (friendName) {
    console.log(`${friendName} liked ${this.title}`);
  }
}
export {Social}
