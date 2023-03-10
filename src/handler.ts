export async function handleRequest(request: Request): Promise<Response> {
  
  const url = new URL(request.url)

  const headers = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    }
  }
  
  const serverJson = {
    "m.server": "matrix.atunemic.cn:443"
  }

  const clientJson = {
      "m.homeserver": {
          "base_url": "https://matrix.atunemic.cn"
      },
      "m.identity_server": {
          "base_url": "https://vector.im"
      }
  }
  
  var msg

  if (url.pathname.endsWith("server")) {
    msg  = JSON.stringify(serverJson)
  }

  if (url.pathname.endsWith("client")) {
    msg = JSON.stringify(clientJson)
  }

  if (msg) {
    return new Response( msg , headers);
  } else {
    return new Response('Not Found.', { status: 404 })
  }
  
}
