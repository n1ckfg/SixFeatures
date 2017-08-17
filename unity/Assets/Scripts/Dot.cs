using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Dot : MonoBehaviour {

    public Vector3 pos;
    public float s = 50f;
    public float speed;
    public Vector3 target;

    public Color fillOrig = new Color(0, 100, 255);
    public Color fillHit = new Color(0, 200, 255);
    public Color fillNow;

    private Renderer ren;

    private void Awake() {
        ren = GetComponent<Renderer>();
    }

    private void Start() {
        fillNow = fillOrig;

        pos = new Vector3(0f, 0f, 0f);
        speed = Random.Range(1f, 5f);
        target = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Random.Range(0f, Screen.height), 0f));
    }
	
	private void Update() {
        pos = Vector3.Lerp(pos, target, 0.005f * speed);

        transform.position = pos;

        Vector3 screenPos = Camera.main.WorldToScreenPoint(transform.position);

        if ((target.x > 0f && pos.x > Screen.width - (s / 2f)) || (target.x < 0 && pos.x < -(s / 2f))) {
            target.x *= -1f;
            target.y = Random.Range(0f, Screen.height);
        }

        if (target.x < 0) {
            fillNow = fillHit;
        } else {
            fillNow = fillOrig;
        }

        ren.material.SetColor("_Color", fillNow);
    }

}
