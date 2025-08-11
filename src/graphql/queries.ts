import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 50) {
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`;

export interface LaunchGql {
  mission_name: string;
  launch_date_local: string;
  rocket: { rocket_name: string };
}

export interface LaunchesQueryResult {
  launchesPast: LaunchGql[];
}
