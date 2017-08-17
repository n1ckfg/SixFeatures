using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dot : MonoBehaviour {

    public float speed = 2f;
    public Vector3 target;

    public Color fillOrig = new Color(0, 100, 255);
    public Color fillHit = new Color(0, 200, 255);

    private Color fillNow;
    private Renderer ren;
    private bool timeout = false;
    private float timeoutDur = 0.05f;

    private void Awake() {
        ren = GetComponent<Renderer>();
    }

    private void Start() {
        fillNow = fillOrig;
        ren.material.SetColor("_Color", fillNow);

        speed = Random.Range(speed/2f, speed*2f);
        target = new Vector3(Screen.width*2f, Random.Range(0f, Screen.height), 0f);
        Debug.Log(target);
    }

    private void Update() {
        Vector3 newPos = Camera.main.ScreenToWorldPoint(Vector3.Lerp(Camera.main.WorldToScreenPoint(transform.position), target, 0.005f * speed));
        transform.position = new Vector3(newPos.x, newPos.y, transform.position.z);

        Vector3 screenPos = Camera.main.WorldToScreenPoint(transform.position);
        if (screenPos.x < 0f || screenPos.x > (float)Screen.width) {
            target.x *= -1f;

            if (!timeout) {
                if (target.x < 0f) {
                    fillNow = fillHit;
                } else {
                    fillNow = fillOrig;
                }
                ren.material.SetColor("_Color", fillNow);
                StartCoroutine(resetTimeout());
            }
        }
    }

    private IEnumerator resetTimeout() {
        timeout = true;
        yield return new WaitForSeconds(timeoutDur);
        timeout = false;
    }

}
