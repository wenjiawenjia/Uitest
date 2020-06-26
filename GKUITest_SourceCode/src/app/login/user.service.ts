


export class userService {

  private sessionKey: { get; set; };
  setSessionKey(key) {
    this.sessionKey = key;
  }
  getSessionKey() {
    return this.sessionKey;
  }
}
