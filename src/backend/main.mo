import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    service : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitBooking(name : Text, phone : Text, service : Text) : async () {
    let newSubmission : Submission = {
      name;
      phone;
      service;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getAllBookings() : async [Submission] {
    submissions.toArray();
  };
};
