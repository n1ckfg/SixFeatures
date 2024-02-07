using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sf5_arrays : MonoBehaviour {

    public Transform sphere;
    public float speedX = 0.01f;
    public Color color;
    public int numSpheres = 4;

    private Material mtl;
    private List<Transform> spheres;
    private List<float> speedXList;

    private void Awake() {
        mtl = sphere.GetComponent<Renderer>().sharedMaterial;
    }

    private void Start() {
        spheres = new List<Transform>();
        speedXList = new List<float>();
        for (int i = 0; i < numSpheres; i++) {
            spheres.Add(Instantiate(sphere, new Vector3(0f, i * 1f, 0f), Quaternion.identity));
            speedXList.Add(Random.Range(speedX/2f, speedX*2f));
        }
    }

    private void Update() {
        moveSpheres();
        mtl.SetColor("_Color", color);
    }

    private void moveSpheres() {
        for (int i = 0; i < spheres.Count; i++) {
            spheres[i].Translate(speedXList[i], 0f, 0f);
            Vector3 screenPos = Camera.main.WorldToScreenPoint(spheres[i].position);
            if (screenPos.x < 0f || screenPos.x > Screen.width) {
                speedXList[i] *= -1f;
            }
        }
    }

}
