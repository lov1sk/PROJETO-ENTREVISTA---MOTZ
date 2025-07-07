import { useQuery } from "@tanstack/react-query";
import { api, urls } from "../api";
import {
  GetTravelDetailsResponse,
  GetTravelDocumentsResponse,
  GetTravelsResponseItem,
} from "@/types/travel/travel.type";

export const useGetTravels = () => {
  return useQuery<GetTravelsResponseItem[]>({
    queryKey: ["travel"],
    queryFn: async () => {
      const response = await api.get(urls.TRAVEL.GET_TRAVELS);

      return response.data;
    },
  });
};

export const useGetTravelDetails = ({ id }: { id?: string }) => {
  return useQuery<GetTravelDetailsResponse>({
    queryKey: [`travel-${id}`],
    queryFn: async () => {
      const response = await api.get(
        urls.TRAVEL.GET_TRAVEL_DETAILS.replace(":id", id)
      );

      return response.data;
    },
    enabled: !!id,
  });
};

export const useGetTravelDocuments = ({ id }: { id?: string }) => {
  return useQuery<GetTravelDocumentsResponse>({
    queryKey: [`travel-documents-${id}`],
    queryFn: async () => {
      const response = await api.get(
        urls.TRAVEL.GET_TRAVEL_DOCUMENTS.replace(":id", id)
      );

      return response.data;
    },
    enabled: !!id,
  });
};
