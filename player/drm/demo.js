var config = {
  key: '<YOUR PLAYER KEY>',
  cast: {
    enable: true
  }
};

var source = {
  dash: 'https://jiostreamingdash.akamaized.net/content/entry/wvdata/32/36/181df7a0fc5c11ebb07c23bcc58fc910_voot_mobile_premium.mpd',
  hls: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8',
  smooth: 'https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest',
  drm: {
    widevine: {
      LA_URL: 'https://prod.media.jio.com/wvproxy?videoid=2000352672&vootid=937861&isVoot=true&voottoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwMzQ2YjVhYmE5MDE0NTMwOTYyZGFmODVlZDRkZmYzMSIsImVtYWlsIjoicmFzaG1pc3Jpbml2YXM3QGdtYWlsLmNvbSIsImRldmljZUlkIjoiMDM0NmI1YWJhOTAxNDUzMDk2MmRhZjg1ZWQ0ZGZmMzEiLCJrVXNlcklkIjoiMzcyOTY4MCIsImlhdCI6MTYyOTUwNDg0NywiZXhwIjoxNjMwMzY4ODQ3LCJpc3MiOiJ2b290In0.M89gACAS99qrOdVcpWjaHyNSOARYmiUuuLtQLp1EagA'
    },
    playready: {
      LA_URL: 'https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&ContentKey=EAtsIJQPd5pFiRUrV9Layw=='
    }
  }
};
