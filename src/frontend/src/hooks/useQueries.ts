import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      service,
    }: {
      name: string;
      phone: string;
      service: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitBooking(name, phone, service);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
}
