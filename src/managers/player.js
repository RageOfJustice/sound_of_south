// @flow
import R from 'ramda'
import API, { HOST } from '../api'

type Podcast = {
  url: string,
  title: string,
  tags?: string[],
  podcastId: number,
}

export const getPodcasts = (token: string): Podcast[] =>
  fetch(API.PODCASTS, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(
      R.map(({ url, id, ...rest }) => ({
        ...rest,
        podcastId: id,
        url: `${HOST}${url}`,
      })),
    )

// export const getPodcasts = () =>
//   delay(1000).then(
//     R.always([
//       {
//         podcastId: '1',
//         title: 'Murmaider',
//         tags: ['#tag', '#tag1', '#tag2'],
//         url:
//           'https://cs1-48v4.vkuseraudio.net/p8/39e4d1cc83bafc.mp3?extra=V2h8wVgWKReYcPLR3gIUjxdGflD5MMnP3hHjOSJi-s18VmYIPXc__0gRVwwF-vdXTZEUfmYmSJFvS2jDr4NaiUc6UnMWYCHnr56NMqhLsIMg5MHDZqO4j_gG09-SOTpZUqiJp7i4yiwlbTs',
//       },
//       {
//         podcastId: '2',
//         title: 'money talks',
//         url:
//           'https://psv4.vkuseraudio.net/c4661/u2963066/audios/ba318e670099.mp3?extra=Pt2qBBkomt_pWW9QsN60gy_1maMoRrPiV_kU14F7lHmTmQUV0mCPagAN_pLv4UyNELgFQPIJ5gwzNxKuGQ0mIaALU0Ouya4L4AQJIMEoszn-dHZULhbbsIsQ5ZQBCVdoR90Nt3jgF39yI6V3',
//         tags: ['#bestbands', '#ac', '#classicmetal'],
//       },
//     ]),
//   )
